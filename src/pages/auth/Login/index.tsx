"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"

import SocialLogin from "./SocialLogin"
import { useEffect } from "react"

const loginFormSchema = z.object({
  email: z.string().min(1, { message: "This is required" }).email("Invalid email"),
  password: z.string().min(1, { message: "This is required" }),
  remember: z.boolean(),
})

const SignIn = () => {
  
// Scroll to top when component mounts
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const handleSignIn = async (data: z.infer<typeof loginFormSchema>) => {
    console.log(data)
    navigate("/watchlist")
  }

  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="md:text-left text-center space-y-1 mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome!</h1>
          <p className="text-gray-300">Login your account to get up to date crypto news</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        required
                        {...field}
                        type="email"
                        placeholder="Enter Email"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                    <FormLabel className="text-white font-medium">Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        placeholder="Enter Password"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      />
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
                          className="border-gray-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 text-white text-sm">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
                <Link to={"/forget-password"} className="text-18 font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 text-gray-300 hover:text-white text-sm transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full text-white font-semibold bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 transition-all duration-300 py-3"
            >
              Sign In
            </Button>

            <SocialLogin />
            <p className="text-center text-gray-300 text-sm pt-2">
              Don't have an account?{" "}
              <Link to="/signup"  className="text-18 font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 text-gray-300 hover:text-white text-sm transition-colors"
  >
                Register here
              </Link>
            </p>
          </form>
        </Form>
      </div>

      <style >{`
        .login-card-container {
          position: relative;
          padding: 2px;
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          border-radius: 16px;
          animation: gradientShift 8s ease infinite;
        }
        
        .login-card {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 14px;
          padding: 2rem;
          width: 100%;
          height: 100%;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export default SignIn
