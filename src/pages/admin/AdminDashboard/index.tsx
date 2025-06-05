import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PieChart, Pie, Cell } from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { monthlyData,months,yearlyData,users,COLORS,years } from "@/constants/admin-dashboard-data";
const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full">
          <div className="space-y-4">
            <Card className="bg-[#0F172A] text-white py-4 px-6 shadow-[0_0_30px_#00FFFF44] border-cyan-500">
              <CardContent className="p-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Monthly Revenue</h3>
                  <Select defaultValue="04">
                    <SelectTrigger className="w-[100px] text-xs bg-slate-950 text-white border-cyan-500">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold mb-1">$9,882.38</div>
                    <div className="text-green-400 text-sm mb-4">+32.1%</div>
                    <div className="flex items-center gap-8">
                      <div className="space-y-1 text-sm">
                        {monthlyData.map((entry, idx) => (
                          <div key={idx} className="flex justify-between w-48">
                            <span style={{ color: COLORS[idx] }}>
                              {entry.name}
                            </span>
                            <span>${entry.value.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Pie Chart Container */}
                  <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible flex justify-center mt-4 md:mt-0 ">
                    <div className="min-w-[240px]">
                      <PieChart
                        width={240}
                        height={240}
                        style={{
                          filter:
                            "drop-shadow(0px 6px 10px rgba(0,255,255,0.4))",
                        }}
                      >
                        <Pie
                          data={monthlyData}
                          cx={120}
                          cy={110} // move center down for perspective
                          innerRadius={70}
                          outerRadius={100}
                          dataKey="value"
                          startAngle={210}
                          endAngle={-150}
                          paddingAngle={2}
                        >
                          {monthlyData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={`url(#grad${index})`} // gradient fill
                            />
                          ))}
                        </Pie>

                        {/* Gradient definitions for 3D effect */}
                        <defs>
                          {COLORS.map((color, index) => (
                            <radialGradient
                              key={index}
                              id={`grad${index}`}
                              cx="30%"
                              cy="30%"
                              r="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={color}
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="100%"
                                stopColor={color}
                                stopOpacity={1}
                              />
                            </radialGradient>
                          ))}
                        </defs>
                      </PieChart>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0F172A] text-white p-4 px-6 shadow-[0_0_30px_#00FFFF44] border-cyan-500 backdrop-blur-2xl">
              <CardContent className="p-0">
                <div className="flex justify-between items-center ">
                  <h3 className="font-semibold">Yearly Revenue</h3>
                  <Select defaultValue="2025">
                    <SelectTrigger className="w-[100px]  text-xs bg-slate-950 text-white border-cyan-500">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  {/* Left side: Revenue numbers and breakdown */}
                  <div className="flex flex-col">
                    <div className="text-3xl font-bold mb-1">$99,882.38</div>
                    <div className="text-green-400 text-sm mb-4">+32.1%</div>
                    <div className="flex items-center gap-8">
                      <div className="space-y-1 text-sm">
                        {yearlyData.map((entry, idx) => (
                          <div key={idx} className="flex justify-between w-48">
                            <span style={{ color: COLORS[idx] }}>
                              {entry.name}
                            </span>
                            <span>${entry.value.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Pie Chart Container */}
                  <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible flex justify-center mt-4 md:mt-0">
                    <div className="min-w-[240px]">
                      <PieChart
                        width={240}
                        height={240}
                        style={{
                          filter:
                            "drop-shadow(0px 6px 10px rgba(0,255,255,0.4))",
                        }}
                      >
                        <Pie
                          data={monthlyData}
                          cx={120}
                          cy={110} // move center down for perspective
                          innerRadius={70}
                          outerRadius={100}
                          dataKey="value"
                          startAngle={210}
                          endAngle={-150}
                          paddingAngle={2}
                        >
                          {yearlyData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={`url(#grad${index})`} // gradient fill
                            />
                          ))}
                        </Pie>

                        {/* Gradient definitions for 3D effect */}
                        <defs>
                          {COLORS.map((color, index) => (
                            <radialGradient
                              key={index}
                              id={`grad${index}`}
                              cx="30%"
                              cy="30%"
                              r="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={color}
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="100%"
                                stopColor={color}
                                stopOpacity={1}
                              />
                            </radialGradient>
                          ))}
                        </defs>
                      </PieChart>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Users Table */}
          <Card className="bg-black p-4 shadow-[0_0_30px_#00FFFF44] border-cyan-500">
            <CardContent className="p-0">
              <div className="text-lg font-semibold mb-4">Top 10 Users</div>

              {/* Horizontal scroll only on small screens */}
              <div className="sm:overflow-x-visible overflow-x-auto">
                <div className="sm:min-w-full min-w-[600px]">
                  <div className="flex justify-between  text-white border-b border-primary py-2 font-semibold text-lg">
                    <div>Username</div>
                    <div>Mail Id</div>
                    <div>Total Spend</div>
                  </div>

                  <ScrollArea className="h-[500px]">
                    {users.map((user, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center text-sm py-3 border-b border-gray-800"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-gray-700 h-6 w-6 text-xs flex items-center justify-center">
                            {user.name[0]}
                          </div>
                          {user.name}
                        </div>
                        <div>{user.email}</div>
                        <div>{user.amount}</div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Revenue Section */}
      </div>
    </div>
  );
};

export default AdminDashboard;
