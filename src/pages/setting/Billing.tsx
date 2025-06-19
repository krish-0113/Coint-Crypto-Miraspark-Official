"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Eye, EyeOff, CheckCircle, XCircle, ArrowRight } from "lucide-react"

const BillingScreen = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [tab, setTab] = React.useState("all")
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 6

  // Extended billing history data
  const billingHistory = [
    { type: "success", plan: "Pro Digest Plan", date: "15 May 2025", amount: "$29.99" },
    { type: "failed", plan: "Alpha Digest Plan", date: "12 Apr 2025", amount: "$99.99" },
    { type: "success", plan: "Pro Digest Plan", date: "15 Mar 2025", amount: "$29.99" },
    { type: "success", plan: "Quick Scope Plan", date: "15 Feb 2025", amount: "$9.99" },
    { type: "success", plan: "Pro Digest Plan", date: "15 Jan 2025", amount: "$29.99" },
    { type: "failed", plan: "Alpha Digest Plan", date: "12 Dec 2024", amount: "$99.99" },
    { type: "success", plan: "Pro Digest Plan", date: "15 Nov 2024", amount: "$29.99" },
    { type: "success", plan: "Pro Digest Plan", date: "15 Oct 2024", amount: "$29.99" },
    { type: "success", plan: "Quick Scope Plan", date: "15 Sep 2024", amount: "$9.99" },
    { type: "failed", plan: "Pro Digest Plan", date: "15 Aug 2024", amount: "$29.99" },
    { type: "success", plan: "Pro Digest Plan", date: "15 Jul 2024", amount: "$29.99" },
    { type: "success", plan: "Alpha Digest Plan", date: "15 Jun 2024", amount: "$99.99" },
  ]

  const filteredHistory = billingHistory.filter((item) => tab === "all" || item.type === tab)
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage)
  const currentItems = filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleChangePassword = () => {
    window.location.href = '/reset-password'
  }

  const handleUpgradePlan = () => {
    window.location.href = '/pricing'
  }

  return (
    <div className="min-h-screen text-white p-4 md:p-8 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/img/blue.png"
        alt="Blue Light"
        className="absolute top-0 left-0 w-full h-full transform -translate-x-1/2 pointer-events-none opacity-20 z-0"
      />

      {/* Enhanced Dark Gradient Background with more black */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-slate-900 to-black z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black via-gray-900 to-transparent z-0"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 relative z-10">
        {/* Left Panel */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <div className="text-white bg-transparent p-3 rounded-md border border-gray-800">
              davidmarsh@gmail.com
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Password</label>
            <div className="flex gap-2">
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  value="password"
                  readOnly
                  className="pr-10 bg-black/80 border border-gray-800 text-white"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="change-password-button-wrapper">
                <Button
                  type="button"
                  onClick={handleChangePassword}
                  className="w-full sm:w-auto text-white font-semibold transition-all duration-300 py-3"
                >
                  Change Password
                </Button>
              </div>
            </div>
          </div>

          {/* Current Plan Card */}
          <div className="plan-card-wrapper">
            <div className="plan-card-content">
              <img
                src="/img/blue.png"
                alt="Blue Light"
                className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0"
              />
              <CardContent className="p-6 space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-300">Current Plan:</div>
                    <div className="text-xl font-bold text-white">Pro Digest</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">$2.49</div>
                    <div className="text-xs text-gray-400">Billed as $29.99/year</div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-red-400 text-sm bg-black/80 p-2 rounded-md">Expired in 3 Days</span>
                  <div className="flex items-center gap-3 text-md font-semibold text-white">
                    Auto Renew <Switch />
                  </div>
                </div>
                <div className="upgrade-button-wrapper">
                  <Button onClick={handleUpgradePlan} className="w-full text-white transition-all duration-300">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </div>

        {/* Right Panel - Billing History */}
        <div className="billing-history-wrapper">
          <div className="billing-history-content">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Billing History</h2>
                <Tabs value={tab} onValueChange={(value) => { setTab(value); setCurrentPage(1); }}>
                  <TabsList className="bg-gray-900/50 border border-gray-700">
                    <TabsTrigger value="all" className="text-gray-300 data-[state=active]:text-white">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="success" className="text-gray-300 data-[state=active]:text-white">
                      Success
                    </TabsTrigger>
                    <TabsTrigger value="failed" className="text-gray-300 data-[state=active]:text-white">
                      Failed
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Table Header */}
              <div className="flex justify-between items-center px-2 py-3 font-semibold text-sm text-white border-b border-primary/50">
                <div>Plan Details</div>
                <div>Amount</div>
              </div>

              <ScrollArea className="h-80 lg:h-96 pr-2">
                {currentItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-gray-800/50 py-3 hover:bg-gray-800/20 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      {item.type === "success" ? (
                        <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                      ) : (
                        <XCircle className="text-red-400 flex-shrink-0" size={18} />
                      )}
                      <div>
                        <div className="text-sm text-white">{item.plan}</div>
                        <div className="text-xs text-gray-400">{item.date}</div>
                      </div>
                    </div>
                    <div className="text-sm text-white font-medium">{item.amount}</div>
                  </div>
                ))}
              </ScrollArea>
              
              {/* Pagination Controls */}
              <div className="flex justify-between items-center pt-4">
                <div className="text-sm text-gray-400">
                  Page {currentPage} of {totalPages} ({filteredHistory.length} total)
                </div>
                <div className="flex gap-2">
                  {currentPage > 1 && (
                    <div className="next-button-wrapper">
                      <Button 
                        onClick={handlePrevPage}
                        className="bg-transparent text-primary hover:text-white transition-all duration-300 px-4 py-2"
                      >
                        Previous
                      </Button>
                    </div>
                  )}
                  {currentPage < totalPages && (
                    <div className="next-button-wrapper">
                      <Button 
                        onClick={handleNextPage}
                        className="bg-transparent text-primary hover:text-white transition-all duration-300 px-4 py-2"
                      >
                        Next <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>

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

        .change-password-button-wrapper button {
          width: 100%;
          color: white;
          font-weight: 600;
          background: linear-gradient(to right, #2563eb, #ec4899);
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          transition: all 0.3s ease;
          border: none;
          border-radius: 10px;
        }
        
        .change-password-button-wrapper button:hover {
          background: linear-gradient(to right, #3b82f6, #f472b6);
        }
        
        .upgrade-button-wrapper button {
          width: 100%;
          color: white;
          font-weight: 600;
          background: linear-gradient(to right, #2563eb, #ec4899);
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          transition: all 0.3s ease;
          border: none;
          border-radius: 10px;
        }
        
        .upgrade-button-wrapper button:hover {
          background: linear-gradient(to right, #3b82f6, #f472b6);
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
          
          .next-button-wrapper button {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .next-button-wrapper {
            padding: 1px;
          }
          
          .next-button-wrapper button {
            font-size: 0.75rem;
            padding: 0.375rem 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}

export default BillingScreen