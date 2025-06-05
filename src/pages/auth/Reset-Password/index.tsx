"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { z } from "zod"
import { useState } from "react"
import { Lock, ArrowLeft, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ResetPasswordSchema = z
  .object({
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
      .min(1, { message: "This is required" }),
    confirmPassword: z.string().min(1, { message: "This is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })

const PasswordInput = ({ field, placeholder, ...props }: any) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input
        {...field}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 pr-10"
        {...props}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  )
}

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const handleFormSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    console.log(data)
    // Handle password reset logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <style>{`
        .gradient-border {
          position: relative;
          padding: 2px;
          background: linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          border-radius: 20px;
          animation: gradientShift 8s ease infinite;
        }
        
        .card-inner {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 18px;
          padding: 1.5rem 2rem;
          width: 100%;
          height: 100%;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="gradient-border w-full max-w-lg shadow-2xl shadow-cyan-500/10">
        <div className="card-inner">
          {/* Security Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Header */}
<div className="mb-6">
  <div className="flex flex-wrap items-start gap-2">
    <h1 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
      Create New Password
    </h1>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
      that is at least 8 characters long, includes a number, a special character (@$!%?&),
      an uppercase letter, a lowercase letter, and is different from your previous passwords.
    </p>
  </div>
</div>


          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-5">
              <div className="space-y-4">
              <FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
      <FormLabel className="text-white font-medium">New Password</FormLabel>
      <FormControl>
        <PasswordInput
          field={field}
          placeholder="Enter new password"
          autoComplete="new-password"
          className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="confirmPassword"
  render={({ field }) => (
    <FormItem className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
      <FormLabel className="text-white font-medium">Confirm Password</FormLabel>
      <FormControl>
        <PasswordInput
          field={field}
          placeholder="Confirm new password"
          autoComplete="new-password"
          className="bg-black/40 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

              </div>

              <Button
                type="submit"
                className="w-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 py-3 text-base animate-fadeInUp shadow-lg shadow-purple-500/20"
                style={{ animationDelay: "0.4s" }}
              >
                Update Password
              </Button>
            </form>
          </Form>

         {/* Back to Sign In */}
<div className="text-center mt-5 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
  <Link
    to="/login"
    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
  >
    <ArrowLeft size={16} />
    Back to Sign In
  </Link>

  {/* Horizontal Line */}
  <div className=" h-px w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-40" />
</div>

        </div>
      </div>
    </div>
  )
}
