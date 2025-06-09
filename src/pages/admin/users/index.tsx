"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon, BadgeDollarSign } from "lucide-react"

const data = [
  { name: "Jan", spend: 4000 },
  { name: "Feb", spend: 6200 },
  { name: "Mar", spend: 4100 },
  { name: "Apr", spend: 5000 },
  { name: "May", spend: 5400 },
  { name: "Jun", spend: 8000 },
  { name: "Jul", spend: 7500 },
]

const years = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
]

const AdminDashboard = () => {
  const [tab, setTab] = useState("all")

  return (
    <>
      <style>{`
        /* Animated gradient border keyframes */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 300% 0%;
          }
        }
        
        @keyframes gradient-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Main Background with Dark Blue Gradient */
        .main-dark-gradient-bg {
          background: linear-gradient(135deg, 
            #000000 0%, 
            #0a0a0a 15%, 
            #1a1a2e 35%, 
            #16213e 55%, 
            #0f3460 75%, 
            #1a1a2e 90%, 
            #000000 100%
          );
          min-height: 100vh;
        }
        
        /* Next Button Wrapper */
        .next-button-wrapper {
          position: relative;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
          transition: all 0.3s ease;
        }

        .next-button-wrapper:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 240, 255, 0.3);
        }

        .next-button-wrapper button {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 10px;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Plan Card */
        .plan-card-wrapper {
          position: relative;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
          transition: all 0.3s ease;
        }

        .plan-card-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 240, 255, 0.2);
        }

        .plan-card-content {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 14px;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        /* Billing History Card */
        .billing-history-wrapper {
          position: relative;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 300% 100%;
          animation: gradient-shift 8s linear infinite;
          transition: all 0.3s ease;
        }

        .billing-history-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 240, 255, 0.2);
        }

        .billing-history-content {
          background: linear-gradient(135deg, #000000, #0a0a0a, #1a1a2e, #16213e);
          border-radius: 14px;
          width: 100%;
          height: 100%;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .plan-card-wrapper,
          .billing-history-wrapper {
            margin: 0 -0.5rem;
          }
        }
        
        .animated-gradient-border {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 24px;
        }
        
        .animated-gradient-border-card {
          position: relative;
          background: linear-gradient(45deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff);
          background-size: 400% 400%;
          animation: gradient-border 3s ease infinite;
          padding: 2px;
          border-radius: 16px;
        }
        
        .dark-gradient-bg {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 75%, #16213e 100%);
        }
        
        .card-dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #0f0f23 50%, #1a1a2e 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .profile-card-gradient {
          background: linear-gradient(135deg, #000000 0%, #0f0f23 30%, #1a1a2e 70%, #16213e 100%);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }
      `}</style>

      <div className="main-dark-gradient-bg text-white p-4 md:p-8">
        <div className="max-w-6xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              {/* Profile Section with Gradient Border */}
              <div className="animated-gradient-border-card mb-8">
                <div className="profile-card-gradient p-6 rounded-2xl">
                  <div className="flex gap-3">
                    <Avatar className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-800 border-2 border-cyan-400/30">
                      <AvatarImage src="/placeholder.svg" alt="user" className="w-full h-full object-cover" />
                      <AvatarFallback className="uppercase text-2xl bg-gradient-to-br from-yellow-600 to-yellow-800 text-white">
                        S
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold">Sangam Shukla</h4>
                      <p className="text-gray-300">sangam@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Spend Card with Gradient Border */}
              <div className="animated-gradient-border-card">
                <Card className="card-dark-gradient text-white py-4 px-6 border-none rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <BadgeDollarSign size={28} className="text-cyan-400" />
                        <h3 className="font-normal text-white">Total Spend</h3>
                      </div>

                      <Select defaultValue="2025">
                        <SelectTrigger className="w-[100px] text-xs bg-black/50 text-white border-cyan-500 hover:border-cyan-400">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-cyan-500">
                          {years.map(({ label, value }) => (
                            <SelectItem key={value} value={value} className="text-white hover:bg-cyan-500/20">
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col items-start justify-center mt-3">
                      <div className="text-2xl font-bold mb-1 text-cyan-400">
                        ${data.reduce((acc, d) => acc + d.spend, 0).toLocaleString()}
                      </div>

                      <div className="h-[250px] w-full my-12">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data}>
                            <defs>
                              <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00FFFF" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#8b00ff" stopOpacity={0.5} />
                                <stop offset="100%" stopColor="#0F172A" stopOpacity={0.1} />
                              </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v / 1000}K`} />
                            <Tooltip
                              formatter={(value) => [`$${value}`, "Spend"]}
                              contentStyle={{
                                backgroundColor: "#1e293b",
                                borderColor: "#00FFFF",
                                color: "#fff",
                                borderRadius: "8px",
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="spend"
                              stroke="#00FFFF"
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorSpend)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Panel - Billing History */}
            <div className="billing-history-wrapper">
              <div className="billing-history-content">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-white">Billing History</h2>
                    <Tabs value={tab} onValueChange={setTab}>
  <TabsList className="bg-gray-900/50 border border-gray-700">
    
    <TabsTrigger
      value="all"
      className="relative text-gray-300 data-[state=active]:text-white 
                 after:absolute after:bottom-0 after:left-0 after:right-0 
                 after:h-[2px] after:rounded-full after:content-[''] 
                 data-[state=active]:after:bg-blue-500"
    >
      All
    </TabsTrigger>

    <TabsTrigger
      value="success"
      className="relative text-gray-300 data-[state=active]:text-white 
                 after:absolute after:bottom-0 after:left-0 after:right-0 
                 after:h-[2px] after:rounded-full after:content-[''] 
                 data-[state=active]:after:bg-green-500"
    >
      Success
    </TabsTrigger>

    <TabsTrigger
      value="failed"
      className="relative text-gray-300 data-[state=active]:text-white 
                 after:absolute after:bottom-0 after:left-0 after:right-0 
                 after:h-[2px] after:rounded-full after:content-[''] 
                 data-[state=active]:after:bg-red-500"
    >
      Failed
    </TabsTrigger>

  </TabsList>
</Tabs>


                  </div>

                  {/* Table Header */}
                  <div className="flex justify-between items-center px-2 py-3 font-semibold text-sm text-white border-b border-cyan-500/50">
                    <div>Plan Details</div>
                    <div>Amount</div>
                  </div>

                  <ScrollArea className="h-80 lg:h-96 pr-2">
                    {[
                      { type: "success" },
                      { type: "failed" },
                      { type: "success" },
                      { type: "success" },
                      { type: "success" },
                      { type: "success" },
                    ]
                      .filter((item) => tab === "all" || item.type === tab)
                      .map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center border-b border-gray-800/50 py-3 hover:bg-gray-800/20 transition-colors duration-200 rounded px-2"
                        >
                          <div className="flex items-center gap-3">
                            {item.type === "success" ? (
                              <CheckCircleIcon className="text-green-400 flex-shrink-0" size={18} />
                            ) : (
                              <XCircleIcon className="text-red-400 flex-shrink-0" size={18} />
                            )}
                            <div>
                              <div className="text-sm text-white">Pro Digest Plan</div>
                              <div className="text-xs text-gray-400">1 Jan 2025</div>
                            </div>
                          </div>
                          <div className="text-sm text-cyan-400 font-medium">$29.99</div>
                        </div>
                      ))}
                  </ScrollArea>
                  <div className="flex justify-end pt-4">
                    <div className="next-button-wrapper">
                      <Button className="bg-transparent text-cyan-400 hover:text-white transition-all duration-300">
                        Next <ArrowRightIcon size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
