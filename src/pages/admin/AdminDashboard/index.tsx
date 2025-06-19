import { Card, CardContent } from "@/components/ui/card"
import { PieChart, Pie, Cell, Tooltip } from "recharts"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState } from "react"

// Mock data - this will be dynamic based on selected month/year
const getMonthlyData = (year, month) => {
  // This would typically fetch from an API based on year and month
  const baseData = [
    { name: "Subscriptions", value: 4200.50 },
    { name: "One-time Sales", value: 3100.25 },
    { name: "Refunds", value: -418.37 }
  ]
  
  // Simulate different data for different months/years
  const multiplier = (parseInt(year) - 2023) * 1.2 + (parseInt(month) * 0.1)
  return baseData.map(item => ({
    ...item,
    value: item.value * (1 + multiplier)
  }))
}

const getYearlyData = (year) => {
  // This would typically fetch from an API based on year
  const baseData = [
    { name: "Subscriptions", value: 54200.50 },
    { name: "One-time Sales", value: 33100.25 },
    { name: "Consulting", value: 12581.63 }
  ]
  
  // Simulate different data for different years
  const multiplier = (parseInt(year) - 2023) * 0.8
  return baseData.map(item => ({
    ...item,
    value: item.value * (1 + multiplier)
  }))
}

const users = [
  { id: 1, name: "John Doe", email: "john.doe@email.com", amount: "$2,450.00" },
  { id: 2, name: "Sarah Wilson", email: "sarah.wilson@email.com", amount: "$1,890.50" },
  { id: 3, name: "Mike Johnson", email: "mike.johnson@email.com", amount: "$1,675.25" },
  { id: 4, name: "Emily Davis", email: "emily.davis@email.com", amount: "$1,520.75" },
  { id: 5, name: "David Brown", email: "david.brown@email.com", amount: "$1,445.00" },
  { id: 6, name: "Lisa Garcia", email: "lisa.garcia@email.com", amount: "$1,380.25" },
  { id: 7, name: "Chris Miller", email: "chris.miller@email.com", amount: "$1,295.50" },
  { id: 8, name: "Amanda Taylor", email: "amanda.taylor@email.com", amount: "$1,210.75" },
  { id: 9, name: "Robert Anderson", email: "robert.anderson@email.com", amount: "$1,155.00" },
  { id: 10, name: "Jessica Martinez", email: "jessica.martinez@email.com", amount: "$1,089.25" }
]

const COLORS = ["#00f0ff", "#8b00ff", "#ff00c8", "#00ff88", "#ffaa00"]

const months = [
  { label: "Jan", value: "01" },
  { label: "Feb", value: "02" },
  { label: "Mar", value: "03" },
  { label: "Apr", value: "04" },
  { label: "May", value: "05" },
  { label: "Jun", value: "06" },
  { label: "Jul", value: "07" },
  { label: "Aug", value: "08" },
  { label: "Sep", value: "09" },
  { label: "Oct", value: "10" },
  { label: "Nov", value: "11" },
  { label: "Dec", value: "12" }
]

const years = [
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" }
]

const AdminDashboard = () => {
  const [selectedMonthYear, setSelectedMonthYear] = useState("2025")
  const [selectedMonth, setSelectedMonth] = useState("06")
  const [selectedYear, setSelectedYear] = useState("2025")
  const [showMonthlyTooltip, setShowMonthlyTooltip] = useState(false)
  const [showYearlyTooltip, setShowYearlyTooltip] = useState(false)
  const [monthlyTooltipData, setMonthlyTooltipData] = useState(null)
  const [yearlyTooltipData, setYearlyTooltipData] = useState(null)

  const handleUserClick = (userId) => {
    // Navigate to user page - in a real app, you'd use router.push or navigate
    window.location.href = `/admin-dashboard-users?userId=${userId}`
  }

  const monthlyData = getMonthlyData(selectedMonthYear, selectedMonth)
  const yearlyData = getYearlyData(selectedYear)

  const calculateTotal = (data) => {
    return data.reduce((sum, item) => sum + item.value, 0)
  }

  const handleMonthlyPieClick = (data, index) => {
    setMonthlyTooltipData({ data, index })
    setShowMonthlyTooltip(!showMonthlyTooltip)
    setShowYearlyTooltip(false)
  }

  const handleYearlyPieClick = (data, index) => {
    setYearlyTooltipData({ data, index })
    setShowYearlyTooltip(!showYearlyTooltip)
    setShowMonthlyTooltip(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="space-y-4">
            {/* Monthly Revenue Card */}
            <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
              <Card className="relative bg-gradient-to-br from-black via-slate-800 to-blue-900 text-white py-4 px-6 rounded-xl border-0 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-black via-slate-900 to-blue-900/60 backdrop-blur-sm"></div>
                <CardContent className="relative p-0 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-cyan-300">Monthly Revenue</h3>
                    <div className="flex gap-2">
                      <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
                        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                          <SelectTrigger className="w-[80px] text-xs bg-slate-900 text-white border-0 hover:bg-slate-800 rounded-lg">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-purple-500/50 rounded-lg">
                            {months.map(({ label, value }) => (
                              <SelectItem 
                                key={value} 
                                value={value} 
                                className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 focus:bg-gradient-to-r focus:from-purple-600/30 focus:to-pink-600/30"
                              >
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
                        <Select value={selectedMonthYear} onValueChange={setSelectedMonthYear}>
                          <SelectTrigger className="w-[80px] text-xs bg-slate-900 text-white border-0 hover:bg-slate-800 rounded-lg">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-purple-500/50 rounded-lg">
                            {years.map(({ label, value }) => (
                              <SelectItem 
                                key={value} 
                                value={value} 
                                className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 focus:bg-gradient-to-r focus:from-purple-600/30 focus:to-pink-600/30"
                              >
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold mb-1 text-white">${calculateTotal(monthlyData).toFixed(2)}</div>
                      <div className="text-green-400 text-sm mb-4">+32.1%</div>
                      <div className="flex items-center gap-8">
                        <div className="space-y-1 text-sm">
                          {monthlyData.map((entry, idx) => (
                            <div key={idx} className="flex justify-between w-48">
                              <span style={{ color: COLORS[idx] }} className="font-medium">
                                {entry.name}
                              </span>
                              <span className="text-gray-200">${entry.value.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible flex justify-center mt-4 md:mt-0 relative">
                      <div className="min-w-[240px]">
                        <PieChart
                          width={240}
                          height={240}
                          style={{
                            filter: "drop-shadow(0px 6px 10px rgba(0,255,255,0.4))",
                          }}
                        >
                          <Pie
                            data={monthlyData}
                            cx={120}
                            cy={110}
                            innerRadius={70}
                            outerRadius={100}
                            dataKey="value"
                            startAngle={210}
                            endAngle={-150}
                            paddingAngle={2}
                            isAnimationActive={false}
                            onClick={handleMonthlyPieClick}
                          >
                            {monthlyData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={`url(#grad${index})`}
                                style={{ outline: 'none', cursor: 'pointer' }}
                              />
                            ))}
                          </Pie>
                          <defs>
                            {COLORS.map((color, index) => (
                              <radialGradient key={index} id={`grad${index}`} cx="30%" cy="30%" r="100%">
                                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor={color} stopOpacity={1} />
                              </radialGradient>
                            ))}
                          </defs>
                        </PieChart>
                        
                        {/* Monthly Tooltip Rectangle */}
                        {showMonthlyTooltip && monthlyTooltipData && (
                          <div className="absolute top-0 right-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/50 rounded-lg p-3 shadow-lg z-20 min-w-[200px]">
                            <div className="text-cyan-300 font-semibold mb-2">Revenue Details</div>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span style={{ color: COLORS[monthlyTooltipData.index] }}>
                                  {monthlyTooltipData.data.name}
                                </span>
                                <span className="text-white font-medium">
                                  ${monthlyTooltipData.data.value.toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between text-gray-300 text-xs">
                                <span>Percentage:</span>
                                <span>{((monthlyTooltipData.data.value / calculateTotal(monthlyData)) * 100).toFixed(1)}%</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Yearly Revenue Card */}
            <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
              <Card className="relative bg-gradient-to-br from-black via-slate-800 to-blue-900 text-white p-4 px-6 rounded-xl border-0 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-black via-slate-900 to-blue-900/60 backdrop-blur-sm"></div>
                <CardContent className="relative p-0 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-cyan-300">Yearly Revenue</h3>
                    <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
                      <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger className="w-[100px] text-xs bg-slate-900 text-white border-0 hover:bg-slate-800 rounded-lg">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-purple-500/50 rounded-lg">
                          {years.map(({ label, value }) => (
                            <SelectItem 
                              key={value} 
                              value={value} 
                              className="text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 focus:bg-gradient-to-r focus:from-purple-600/30 focus:to-pink-600/30"
                            >
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col">
                      <div className="text-3xl font-bold mb-1 text-white">${calculateTotal(yearlyData).toFixed(2)}</div>
                      <div className="text-green-400 text-sm mb-4">+32.1%</div>
                      <div className="flex items-center gap-8">
                        <div className="space-y-1 text-sm">
                          {yearlyData.map((entry, idx) => (
                            <div key={idx} className="flex justify-between w-48">
                              <span style={{ color: COLORS[idx] }} className="font-medium">
                                {entry.name}
                              </span>
                              <span className="text-gray-200">${entry.value.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible flex justify-center mt-4 md:mt-0 relative">
                      <div className="min-w-[240px]">
                        <PieChart
                          width={240}
                          height={240}
                          style={{
                            filter: "drop-shadow(0px 6px 10px rgba(0,255,255,0.4))",
                          }}
                        >
                          <Pie
                            data={yearlyData}
                            cx={120}
                            cy={110}
                            innerRadius={70}
                            outerRadius={100}
                            dataKey="value"
                            startAngle={210}
                            endAngle={-150}
                            paddingAngle={2}
                            isAnimationActive={false}
                            onClick={handleYearlyPieClick}
                          >
                            {yearlyData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={`url(#gradYearly${index})`}
                                style={{ outline: 'none', cursor: 'pointer' }}
                              />
                            ))}
                          </Pie>
                          <defs>
                            {COLORS.map((color, index) => (
                              <radialGradient key={index} id={`gradYearly${index}`} cx="30%" cy="30%" r="100%">
                                <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor={color} stopOpacity={1} />
                              </radialGradient>
                            ))}
                          </defs>
                        </PieChart>
                        
                        {/* Yearly Tooltip Rectangle */}
                        {showYearlyTooltip && yearlyTooltipData && (
                          <div className="absolute top-0 right-0 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/50 rounded-lg p-3 shadow-lg z-20 min-w-[200px]">
                            <div className="text-cyan-300 font-semibold mb-2">Revenue Details</div>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span style={{ color: COLORS[yearlyTooltipData.index] }}>
                                  {yearlyTooltipData.data.name}
                                </span>
                                <span className="text-white font-medium">
                                  ${yearlyTooltipData.data.value.toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between text-gray-300 text-xs">
                                <span>Percentage:</span>
                                <span>{((yearlyTooltipData.data.value / calculateTotal(yearlyData)) * 100).toFixed(1)}%</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Users Table */}
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#00f0ff] via-[#8b00ff] via-[#ff00c8] to-[#00f0ff] animate-gradient-x">
            <Card className="relative bg-gradient-to-br from-black via-slate-800 to-blue-900 p-4 rounded-xl border-0 shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden">
              <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-black via-slate-900 to-blue-900/60 backdrop-blur-sm"></div>
              <CardContent className="relative p-0 z-10">
                
                <div className="text-lg font-semibold mb-4 text-cyan-300">Top 10 Users</div>

                <div className="sm:overflow-x-visible overflow-x-auto">
                  <div className="sm:min-w-full min-w-[600px] space-y-6">
                    
                    {/* Header Row */}
                    <div className="flex justify-between text-white border-b border-cyan-400/30 py-2 font-semibold text-lg">
                      <div className="text-cyan-300">Username</div>
                      <div className="text-cyan-300">Mail Id</div>
                      <div className="text-cyan-300">Total Spend</div>
                    </div>

                    {/* Users List */}
                    <div className="space-y-2 max-h-[500px] overflow-auto pb-1">
                      {users.map((user, idx) => (
                        <div
                          key={idx}
                          className="relative p-[1px] rounded-lg bg-gradient-to-r from-[#00f0ff]/20 via-[#8b00ff]/20 via-[#ff00c8]/20 to-[#00f0ff]/20 animate-gradient-x cursor-pointer hover:from-[#00f0ff]/40 hover:via-[#8b00ff]/40 hover:via-[#ff00c8]/40 hover:to-[#00f0ff]/40 transition-all duration-300"
                          onClick={() => handleUserClick(user.id)}
                        >
                          <div className="flex justify-between items-center text-sm py-3 px-4 bg-gradient-to-r from-[#0a0a14] via-[#1a1a2e] to-[#0a0a14] rounded-md hover:from-[#0f0f1f] hover:via-[#1f1f33] hover:to-[#0f0f1f] transition-all duration-300">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="rounded-full bg-gradient-to-r from-[#1e90ff] to-[#00bfff] h-8 w-8 text-sm flex items-center justify-center font-semibold text-white flex-shrink-0">
                                {user.name[0]}
                              </div>
                              <span className="text-gray-200 truncate">{user.name}</span>
                            </div>
                            <div className="text-gray-300 flex-1 text-center min-w-0">
                              <span className="truncate block">{user.email}</span>
                            </div>
                            <div className="text-green-400 font-semibold flex-shrink-0 text-right">{user.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default AdminDashboard