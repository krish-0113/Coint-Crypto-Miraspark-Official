import { useEffect } from "react";

import { useMutation } from "react-query";

import facebookImg from "@/assets/images/facebook.png";
import googleImg from "@/assets/images/google.png";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/hooks/useAuth";

const SocialLogin = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full text-center">
        <hr className="flex-grow border-t border-muted-foreground" />
        <p className="mx-2 uppercase text-xs">OR continue With</p>
        <hr className="flex-grow border-t border-muted-foreground" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <Button variant="outline" className="flex gap-2 w-full">
          <img src={googleImg} className="w-4 h-4"></img>
          Google
        </Button>

        <Button className="flex gap-2 w-full" variant="outline">
          <img src={facebookImg} className="w-4 h-4"></img>
          Facebook
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
