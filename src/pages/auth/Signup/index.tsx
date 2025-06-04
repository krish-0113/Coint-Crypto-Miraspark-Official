"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useSearchParams } from "react-router-dom"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"

import SocialLogin from "../Login/SocialLogin"

const RegisterFormSchema = z
  .object({
    name: z.string().min(1, { message: "This is required" }),
    email: z
      .string()
      .min(1, { message: "This is required" })
      .email("Invalid email")
      .regex(/^\S+$/, { message: "Email should not contain spaces" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[@$!%?&]/, {
        message: "Password must contain at least one special character (@$!%?&)",
      })
      .regex(/^\S+$/, { message: "Password should not contain spaces" })
      .min(1, { message: "This is required" }),
    confirmPassword: z.string().min(1, { message: "This is required" }),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })

const Register = () => {
  const [searchParams] = useSearchParams()

  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  })

  const handleRegister = async (data: z.infer<typeof RegisterFormSchema>) => {
    console.log(data)
  }

  return (
    <div className="register-card-container">
      <div className="register-card">
        <div className="md:text-left text-center space-y-1 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Hi there!</h1>
          <p className="text-gray-300 text-sm md:text-base">Create an account to CoinDigest</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-3" autoComplete="off">
            {/* Two column layout for name and email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white font-medium text-sm">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Name"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 h-10"
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage className="text-red-400 text-xs" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white font-medium text-sm">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        autoComplete="off"
                        placeholder="Enter Email"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 h-10"
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage className="text-red-400 text-xs" />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* Password fields in single column */}
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white font-medium text-sm">Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        placeholder="Enter Password"
                        autoComplete="new-password"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 h-10"
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage className="text-red-400 text-xs" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white font-medium text-sm">Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 h-10"
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage className="text-red-400 text-xs" />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
  control={form.control}
  name="agreeToTerms"
  render={({ field }) => (
    <FormItem className="flex items-center gap-2 pt-1">
      <FormControl>
        <Checkbox
          id="agreeToTerms"
          checked={field.value}
          onCheckedChange={field.onChange}
          className="border-gray-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
        />
      </FormControl>
      <FormLabel
        htmlFor="agreeToTerms"
        className="text-white text-sm leading-none cursor-pointer"
      >
        Agree to{" "}
        <Link
          target="_blank"
          to="/terms"
          className="text-purple-400 hover:text-purple-300 transition-colors underline"
        >
          Terms & Conditions
        </Link>
      </FormLabel>
    </FormItem>
  )}
/>
<FormMessage className="text-red-400 text-xs pl-6 mt-1" />


            <Button
              className="w-full text-white font-semibold bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 transition-all duration-300 py-2.5 h-11 mt-4"
              type="submit"
            >
              Register
            </Button>

            <SocialLogin />
            <p className="text-center text-gray-300 text-sm pt-1">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)] bg-clip-text text-transparent underline decoration-white hover:opacity-80 transition-all duration-300"
              >
                Login
              </Link>
            </p>
          </form>
        </Form>
      </div>

      <style >{`
        .register-card-container {
          position: relative;
          padding: 2px;
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          border-radius: 16px;
          width: 100%;
          max-width: 580px;
          animation: gradientShift 8s ease infinite;
        }
        
        .register-card {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 14px;
          padding: 1.75rem;
          width: 100%;
          min-height: auto;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 768px) {
          .register-card {
            padding: 1.5rem;
          }
          
          .register-card-container {
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  )
}

export default Register
