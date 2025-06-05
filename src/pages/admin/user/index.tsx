import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { monthlyData, COLORS, years } from "@/constants/admin-dashboard-data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  BadgeDollarSign,
} from "lucide-react";

const data = [
  { name: "Jan", spend: 4000 },
  { name: "Feb", spend: 6200 },
  { name: "Mar", spend: 4100 },
  { name: "Apr", spend: 5000 },
  { name: "May", spend: 5400 },
  { name: "Jun", spend: 8000 },
  { name: "Jul", spend: 7500 },
];
const AdminDashboard = () => {
  const [tab, setTab] = useState("all");
  return (
    <div className="min-h-screen  text-white p-4 md:p-8">
        

      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full">
          <div>
            <div className="flex gap-3">
              <Avatar className="w-14 h-14 bg-yellow-700">
                {" "}
                <AvatarImage
                  src=""
                  alt="user"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="uppercase text-2xl">
                  S
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h4>Sangam Shukla</h4>
                <p className="text-gray-200">sangam@gmail.com</p>
              </div>
            </div>

            <Card className="bg-[#0F172A] text-white py-4 px-6 border-none rounded-2xl mt-8 shadow-[0_0_30px_#00FFFF44]">
              <CardContent className="p-0">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <BadgeDollarSign size={28} className="text-cyan-400" />
                    <h3 className="font-normal text-white">
                      <span></span>Total Spend
                    </h3>
                  </div>

                  <Select defaultValue="2025">
                    <SelectTrigger className="w-[100px] text-xs bg-slate-950 text-white border-cyan-500">
                      <SelectValue placeholder="Select year" />
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

                <div className="flex flex-col items-start justify-center mt-3">
                  <div className="text-2xl font-bold mb-1">
                    $
                    {data.reduce((acc, d) => acc + d.spend, 0).toLocaleString()}
                  </div>

                  <div className="h-[250px] w-full my-12">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient
                            id="colorSpend"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#00FFFF"
                              stopOpacity={0.9}
                            />
                            <stop
                              offset="50%"
                              stopColor="#00CED1"
                              stopOpacity={0.5}
                            />
                            <stop
                              offset="100%"
                              stopColor="#0F172A"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis
                          stroke="#94a3b8"
                          tickFormatter={(v) => `$${v / 1000}K`}
                        />
                        <Tooltip
                          formatter={(value) => [`$${value}`, "Spend"]}
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            borderColor: "#00FFFF",
                            color: "#fff",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="spend"
                          stroke="#00FFFF"
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

          {/* Top Users Table */}
          <Card className="bg-black p-4 shadow-[0_0_30px_#00FFFF44] border-cyan-500">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Billing History</h2>
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="bg-gray-900">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="success">Success</TabsTrigger>
                    <TabsTrigger value="failed">Failed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Table Header */}
              <div className="flex justify-between items-center px-2 py-1 font-semibold text-md text-white  border-b  border-primary">
                <div>Plan Details</div>
                <div>Amount</div>
              </div>

              <ScrollArea className="h-96 pr-2">
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
                      className="flex justify-between items-center border-b border-gray-800 py-3"
                    >
                      <div className="flex items-center gap-2">
                        {item.type === "success" ? (
                          <CheckCircleIcon
                            className="text-green-400"
                            size={18}
                          />
                        ) : (
                          <XCircleIcon className="text-red-400" size={18} />
                        )}
                        <div>
                          <div className="text-sm">Pro Digest Plan</div>
                          <div className="text-xs text-gray-400">
                            1 Jan 2025
                          </div>
                        </div>
                      </div>
                      <div className="text-sm">$29.99</div>
                    </div>
                  ))}
              </ScrollArea>
              <div className="flex justify-end pt-4">
                <Button
                  variant="ghost"
                  className="text-primary hover:text-black"
                >
                  Next <ArrowRightIcon size={16} className="ml-1" />
                </Button>
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
