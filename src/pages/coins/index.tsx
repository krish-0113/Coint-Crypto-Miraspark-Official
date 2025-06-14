"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const chartData = {
  "1D": [
    { date: "00:00", value: 1200 },
    { date: "04:00", value: 1220 },
    { date: "08:00", value: 1210 },
    { date: "12:00", value: 1240 },
    { date: "16:00", value: 1260 },
    { date: "20:00", value: 1275 },
  ],
  "7D": [
    { date: "FEB 10", value: 1200 },
    { date: "FEB 11", value: 1300 },
    { date: "FEB 12", value: 1250 },
    { date: "FEB 13", value: 1290 },
    { date: "FEB 14", value: 1394 },
    { date: "FEB 15", value: 1474 },
  ],
  "30D": [
    { date: "JAN 20", value: 1150 },
    { date: "JAN 25", value: 1220 },
    { date: "FEB 1", value: 1240 },
    { date: "FEB 5", value: 1300 },
    { date: "FEB 10", value: 1400 },
    { date: "FEB 15", value: 1474 },
  ],
  "90D": [
    { date: "DEC 1", value: 1000 },
    { date: "JAN 1", value: 1100 },
    { date: "FEB 1", value: 1300 },
    { date: "FEB 15", value: 1474 },
  ],
  ALL: [
    { date: "2021", value: 800 },
    { date: "2022", value: 1200 },
    { date: "2023", value: 1000 },
    { date: "2024", value: 1474 },
  ],
}

export default function BitcoinDashboard() {
  const [timeRange, setTimeRange] = useState("7D")

  return (
    <>
      <style >{`
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
        
        .news-card-gradient {
          background: linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #1a1a2e 70%, #16213e 100%);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }
        
        .time-range-button {
          background: linear-gradient(135deg, #1a1a2e 0%, #2a2a30 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .time-range-button:hover {
          background: linear-gradient(135deg, #00f0ff 0%, #8b00ff 100%);
          border: 1px solid rgba(0, 240, 255, 0.5);
          transform: translateY(-1px);
        }
        
        .time-range-button.active {
          background: linear-gradient(135deg, #00f0ff 0%, #8b00ff 100%);
          border: 1px solid rgba(0, 240, 255, 0.8);
          box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
        }
      `}</style>

      <div className="animated-gradient-border">
        <div className="dark-gradient-bg flex w-full h-full min-h-[calc(90vh-30px)] overflow-hidden flex-col md:flex-row p-4 rounded-3xl">
          <div className=" w-full max-w-5xl mx-auto">
            <Card className="card-dark-gradient border-none rounded-2xl h-full">
              <CardContent className="p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                      ₿
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">$1,474.91</h2>
                      <p className="text-green-400 font-medium">+ $301.93 (24h)</p>
                    </div>
                  </div>
                  <Button
                    className="border border-cyan-500 bg-transparent text-white hover:bg-cyan-500/10 hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    Back
                  </Button>
                </div>

                <div className="flex flex-col gap-3 md:flex-row justify-between items-center mb-4">
                  <Tabs defaultValue="chart">
                    <TabsList className="bg-black/50 border border-gray-700">
                      <TabsTrigger
                        value="chart"
                        className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-gray-300"
                      >
                        Chart
                      </TabsTrigger>
                      <TabsTrigger
                        value="allocation"
                        className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-gray-300"
                      >
                        Allocation
                      </TabsTrigger>
                      <TabsTrigger
                        value="statistics"
                        className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-gray-300"
                      >
                        Statistics
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex gap-2 text-sm">
                    {Object.keys(chartData).map((range) => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1 rounded-lg text-white font-medium transition-all duration-300 ${
                          timeRange === range ? "time-range-button active" : "time-range-button"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-4 border border-gray-700/50">
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={chartData[timeRange]}>
                      <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00ffff" stopOpacity={0.8} />
                          <stop offset="50%" stopColor="#8b00ff" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#000000" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1e293b",
                          borderColor: "#00FFFF",
                          color: "#fff",
                          borderRadius: "8px",
                          border: "1px solid #00FFFF",
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#00FFFF" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#00ffff"
                        fill="url(#blueGradient)"
                        strokeWidth={3}
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Trending News</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "U.S. Dollar Faces Confidence Crisis, Boosting Bitcoin's Appeal",
                      "U.S. Establishes Strategic Bitcoin Reserve U.S. Establishes",
                      "UK Boarding School Accepts Bitcoin for Tuition Fees",
                    ].map((title, idx) => (
                      <div key={idx} className=" p-[1px] animated-gradient-border-card">
                        <Card className=" p-[1px] news-card-gradient border-none rounded-2xl text-white relative overflow-hidden h-full">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-10 z-0">
                            <div className="w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
                          </div>
                          <CardContent className="p-4 relative z-10">
                            <CardTitle className="text-sm font-medium mb-3 text-white leading-relaxed">
                              {title}
                            </CardTitle>
                            <Button
                              variant="link"
                              className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors duration-200"
                            >
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
