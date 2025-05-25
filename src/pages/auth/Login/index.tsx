import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { z } from 'zod';

import PageLoader from '@/components/template/PageLoader';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { PATHS } from '@/constants/page-paths';
import { getErrorMessage, getSuccessMessage } from '@/lib/helpers/get-message';
import { useAuth } from '@/lib/hooks/useAuth';

import SocialLogin from './SocialLogin';

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This is required' })
    .email('Invalid email'),
  password: z.string().min(1, { message: 'This is required' }),
  remember: z.boolean(),
});

const SignIn = () => {


  const [searchParams] = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();


  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });



 
  const handleSignIn = async (data: z.infer<typeof loginFormSchema>) => {
   console.log(data)
  };



  return (
    <>
      <div className="md:text-left text-center space-y-1 ">
        <h1>Welcome!</h1>
        <p className='text-gray-100'>Login your account to get up to date crypto news</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-6">
         
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      type="email"
                      placeholder="Enter Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} placeholder="Enter Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">Remember me</FormLabel>
                  </FormItem>
                )}
              />
              <Link
                to={'/login'}
                className="underline text-primary"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Button type="submit" className="w-full text-white">
            Sign In
          </Button>

          <SocialLogin />
          <p className="text-center">
            {' '}
            Don't have an account?{' '}
            <Link to='/login' className="underline text-primary">
              Register here
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default SignIn;
