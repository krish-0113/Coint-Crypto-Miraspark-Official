import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  EyeIcon,
  EyeOffIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
} from "lucide-react";

const BillingScreen = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [tab, setTab] = React.useState("all");

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
         <img
        src="/img/blue.png"
        alt="Green Light"
        className="absolute top-0 left-0  w-full h-full  transform -translate-x-1/2 pointer-events-none opacity-30 z-0"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        {/* Left Panel */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm">Email</label>
            <div className="flex gap-2">
              <Input value="davidmarsh@gmail.com" readOnly className="" />
              <Button className="bg-primary text-white hover:bg-primary/60 ">
                Edit
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Password</label>
            <div className="flex gap-2">
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  value="password"
                  readOnly
                  className="pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOffIcon size={18} />
                  ) : (
                    <EyeIcon size={18} />
                  )}
                </button>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/60 ">
                Change Password
              </Button>
            </div>
          </div>

          <Card className="bg-[#101418] text-white p-4 relative shadow-[0_0_30px_#00FFFF44] border-cyan-500">
            <img
              src="/img/blue.png"
              alt="Green Light"
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 z-0"
            />
            <CardContent className="p-0 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">Current Plan:</div>
                  <div className="text-xl font-bold">Pro Digest</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$2.49</div>
                  <div className="text-xs">Billed as $29.99/year</div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-red-400 text-sm bg-black/80 p-2 rounded-md">
                  Expired in 3 Days
                </span>
                <div className="flex items-center gap-3 text-md font-semibold">
                  Auto Renew <Switch />
                </div>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/60 w-full">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel */}
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
                        <CheckCircleIcon className="text-green-400" size={18} />
                      ) : (
                        <XCircleIcon className="text-red-400" size={18} />
                      )}
                      <div>
                        <div className="text-sm">Pro Digest Plan</div>
                        <div className="text-xs text-gray-400">1 Jan 2025</div>
                      </div>
                    </div>
                    <div className="text-sm">$29.99</div>
                  </div>
                ))}
            </ScrollArea>
            <div className="flex justify-end pt-4">
              <Button variant="ghost" className="text-primary hover:text-black">
                Next <ArrowRightIcon size={16} className="ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BillingScreen;
