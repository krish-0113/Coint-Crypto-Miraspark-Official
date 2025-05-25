import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { InternalAxiosRequestConfig } from "axios";


import { useAuth } from "@/lib/hooks/useAuth";

import api from "@/services";
import { useTokenStore, useUserStore } from "@/store";
import PageLoader from "../template/PageLoader";

interface AppConfigContextProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  refreshToken: () => Promise<void>;
}

const AppConfigContext = createContext<AppConfigContextProps | undefined>(
  undefined
);

const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { signOut } = useAuth();

  const { token, setToken } = useTokenStore();

  const { setUser, setAuthenticated, isAuthenticated } = useUserStore();

  const refreshToken = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/auth/refresh-token");
      const { token: newToken, ...userInfo } = res?.data?.data ?? {};
      setToken(newToken);
      setUser(userInfo);
    } catch (refreshError) {
      console.log(refreshError);
      signOut();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (isAuthenticated && !token) refreshToken();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any> & { _retry?: boolean }) => {
        if (!config?._retry && token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest =
          error.config as InternalAxiosRequestConfig<any> & {
            _retry?: boolean;
          };
        if (
          error.response?.status === 403 &&
          error.response.data.message === "Unauthorized"
        ) {
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            try {
              const res = await api.get("/auth/refresh-token");
              const { token: newToken, ...userInfo } = res?.data?.data ?? {};
              setToken(newToken);
              setUser(userInfo);
              setAuthenticated(true);
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return api(originalRequest);
            } catch (refreshError) {
              signOut();
              return Promise.reject(refreshError);
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  return (
    <AppConfigContext.Provider
      value={{ isLoading, refreshToken, setIsLoading }}
    >
      {isLoading ? <PageLoader /> : children}
    </AppConfigContext.Provider>
  );
};
export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (context === undefined) {
    throw new Error("useAppConfig must be used within a AppConfigProvider");
  }
  return context;
};

export default AppConfigProvider;
