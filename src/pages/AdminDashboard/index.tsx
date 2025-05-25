import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { name: "Quick Scope", value: 1082.08 },
  { name: "Pro Digest", value: 4003.38 },
  { name: "Alpha Digest", value: 3882.03 },
];

const yearlyData = [
  { name: "Quick Scope", value: 11082.08 },
  { name: "Pro Digest", value: 44003.38 },
  { name: "Alpha Digest", value: 33882.03 },
];

const COLORS = ["#00FF99", "#4C7EFF", "#A066FF"];

const users = [
  { name: "Paul Gruber", email: "paulgruber@gmail.com", amount: "$2699" },
  { name: "Jakob Huber", email: "jakobhuber@gmail.com", amount: "$2699" },
  { name: "Elias Bauer", email: "eliasbauer@gmail.com", amount: "$2699" },
  { name: "Lena Schneider", email: "lenaschneider@gmail.com", amount: "$2699" },
  { name: "Sophia Mayr", email: "sophiamayr@gmail.com", amount: "$2699" },
  {
    name: "Valentina Klimt",
    email: "valentinaklimt@gmail.com",
    amount: "$2699",
  },
  { name: "Laura Hundert", email: "laurahundert@gmail.com", amount: "$2699" },
  { name: "Armin Wolf", email: "arminwolf@gmail.com", amount: "$2699" },
  { name: "Paul Gruber", email: "paulgruber@gmail.com", amount: "$2699" },
  { name: "Paul Gruber", email: "paulgruber@gmail.com", amount: "$2699" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        {/* Revenue Section */}
        <div className="space-y-6">
          <Card className="bg-[#0F172A] text-white p-4">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-lg">Monthly Revenue</div>
                <Button variant="ghost" className="text-xs">
                  April
                </Button>
              </div>

              <div className="flex flex-col md:flex-row items-start justify-between md:items-center ">
                <div className=" flex flex-col">
                  <div className="text-3xl font-bold">$9,882.38</div>
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
                <PieChart width={200} height={200}>
                  <Pie
                    data={monthlyData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {monthlyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0F172A] text-white p-4">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-lg">Yearly Revenue</div>
                <Button variant="ghost" className="text-xs">
                  2025
                </Button>
              </div>
              <div className="text-3xl font-bold">$99,882.38</div>
              <div className="text-green-400 text-sm mb-4">+32.1%</div>
              <div className="flex items-center gap-8">
                <PieChart width={120} height={120}>
                  <Pie
                    data={yearlyData}
                    cx={60}
                    cy={60}
                    innerRadius={35}
                    outerRadius={55}
                    dataKey="value"
                  >
                    {yearlyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className="space-y-1 text-sm">
                  {yearlyData.map((entry, idx) => (
                    <div key={idx} className="flex justify-between w-48">
                      <span style={{ color: COLORS[idx] }}>{entry.name}</span>
                      <span>${entry.value.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Users Table */}
        <Card className="bg-black p-4 shadow-[0_0_30px_#00FFFF44] border-cyan-500">
          <CardContent className="p-0">
            <div className="text-lg font-semibold mb-4">Top 10 Users</div>
            <div className="flex justify-between text-sm text-gray-400 border-b border-gray-700 py-2">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
