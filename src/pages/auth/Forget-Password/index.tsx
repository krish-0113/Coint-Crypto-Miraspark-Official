"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const loginFormSchema = z.object({
  email: z.string().min(1, { message: "This is required" }).email("Invalid email"),
})

export default function ForgotPassword() {
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  })

  const handleFormSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log(data)
    navigate("/reset-password")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <style>{`
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

      <div className="login-card-container w-full max-w-md">
        <div className="login-card">
          <div className="md:text-left text-center space-y-1 mb-8">
            <h1 className="text-2xl font-bold text-white">Forgot Password?</h1>
            <p className="text-gray-300">
              Password reset link will be shared to your email. Please check your email after clicking submit
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
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
              </div>

              <Button
                type="submit"
                className="w-full text-white font-semibold bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 transition-all duration-300 py-3"
              >
                Submit
              </Button>

              <p className="text-center text-gray-300">
                Back to{" "}
                <Link
                  to="/login"
                  className="font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)] bg-clip-text text-transparent underline decoration-white hover:opacity-80 transition-all duration-300"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
