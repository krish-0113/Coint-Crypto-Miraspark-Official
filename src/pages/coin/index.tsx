import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

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
};

export default function BitcoinDashboard() {
  const [timeRange, setTimeRange] = useState("7D");
  const navigate=useNavigate();
  return (
    <div className="flex w-full h-full min-h-[calc(90vh-30px)] overflow-hidden flex-col md:flex-row">
      <Card className="max-w-5xl mx-auto border border-[#343442] rounded-3xl bg-transparent">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                ₿
              </div>
              <div>
                <h2 className="text-2xl font-bold">$1,474.91</h2>
                <p className="text-green-500 font-medium">+ $301.93 (24h)</p>
              </div>
            </div>
            <Button className="border border-cyan-500 bg-transparent" variant="outline" onClick={()=>navigate('/watchlist')}>Back</Button>
          </div>

          <div className="flex flex-col gap-3 md:flex-row justify-between items-center mb-4">
            <Tabs defaultValue="chart">
              <TabsList className="bg-[#2a2a30]">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="allocation">Allocation</TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex gap-2 text-sm">
              {Object.keys(chartData).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded hover:bg-primary ${
                    timeRange === range ? "bg-primary" : "bg-[#2a2a30]"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={chartData[timeRange]}>
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#1e90ff" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1c1c20",
                  borderColor: "#333",
                }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00ffff"
                fill="url(#blueGradient)"
                strokeWidth={2.5}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Trending News</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "U.S. Dollar Faces Confidence Crisis, Boosting Bitcoin’s Appeal",
                "U.S. Establishes Strategic Bitcoin Reserve U.S. Establishes",
                "UK Boarding School Accepts Bitcoin for Tuition Fees",
              ].map((title, idx) => (
                <Card
                  key={idx}
                  className=" border border-[#343442] rounded-3xl bg-transparent text-white relative"
                >
                  <img
                    src="/img/green.svg"
                    alt="Green Light"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-40 z-0"
                  />

                  <CardContent className="p-4">
                    <CardTitle className="text-sm font-medium mb-2">
                      {title}
                    </CardTitle>
                    <Button variant="link" className="text-blue-400 p-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
