import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUp, ArrowDown } from "lucide-react";
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
import { SiBinance, SiRipple, SiSolana, SiTether } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const coinsData = [
  {
    name: "Bitcoin",
    icon: <FaBitcoin />,

    color: "bg-yellow-500",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum />,

    color: "bg-purple-500",
  },
  {
    name: "XRP",
    icon: <SiRipple />,

    color: "bg-blue-500",
  },
  {
    name: "BNB",
    icon: <SiBinance />,

    color: "bg-yellow-400",
  },
  {
    name: "USDC",
    icon: <SiTether />,

    color: "bg-green-500",
  },
  {
    name: "Solana",
    icon: <SiSolana />,

    color: "bg-indigo-500",
  },
  {
    name: "Dogecoin",
    icon: <FaDog />,

    color: "bg-orange-400",
  },
];
export default function ManageCoinsPage() {
  const [search, setSearch] = useState("");
  const [selectedCoins, setSelectedCoins] = useState<string[]>([]);
  const [tab, setTab] = useState("Chart");
  const [sortAsc, setSortAsc] = useState(true);
  const navigate = useNavigate();
  const filteredCoins = coinsData
    .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  const toggleCoin = (coin: string) => {
    setSelectedCoins((prev) =>
      prev.includes(coin) ? prev.filter((c) => c !== coin) : [...prev, coin]
    );
  };

  const discardChanges = () => setSelectedCoins([]);

  return (
    <div className="w-full h-full min-h-[calc(90vh-30px)] p-4 rounded-3xl  text-white border border-[#343442] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Manage Coins</h1>
        <Button
          className="border border-cyan-500 bg-transparent"
          variant="outline"
          onClick={() => navigate("/coins")}
        >
          Back
        </Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 my-6">
        <Input
          placeholder="Search Coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-sm bg-[#1e293b] text-white placeholder-gray-400"
        />

        <div className="flex gap-2">
          {["Chart", "Allocation", "Statistics"].map((label) => (
            <Button
              key={label}
              onClick={() => setTab(label)}
              className={`rounded-xl px-4 py-2 transition-all ${
                tab === label
                  ? "bg-blue-600 text-white"
                  : "bg-[#1e293b] text-gray-300 hover:bg-[#334155]"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => setSortAsc(!sortAsc)}
          className="border border-cyan-500 bg-transparent"
          variant="outline"
        >
          {sortAsc ? <ArrowDown /> : <ArrowUp />}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCoins.map((coin) => (
          <Card
            key={coin.name}
            className={`relative rounded-2xl border-none bg-transparent  transition-transform hover:scale-105 shadow-lg ${
              selectedCoins.includes(coin.name)
                ? "ring-2 ring-cyan-400"
                : "ring-1 ring-gray-700"
            }`}
          >
            <CardContent
              className="p-6 flex flex-col items-center justify-center relative cursor-pointer"
              onClick={() => toggleCoin(coin.name)}
            >
              <Checkbox
                checked={selectedCoins.includes(coin.name)}
                onCheckedChange={() => toggleCoin(coin.name)}
                className="absolute top-4 left-4 border-gray-500 bg-[#1e293b]"
              />
              <div className={`text-5xl  mb-4 ${coin.color} p-6 rounded-full`}>
                {coin.icon}
              </div>
              <div className="text-lg font-semibold">{coin.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <div className="flex gap-4">
          <Button
            className="border border-cyan-500 bg-transparent"
            variant="outline"
            onClick={discardChanges}
          >
            Discard
          </Button>
          <Button className="bg-primary text-white hover:bg-blue-700">
            Update
          </Button>
        </div>
        <div className="text-md text-gray-300">
          {selectedCoins.length} Coin{selectedCoins.length !== 1 ? "s" : ""}{" "}
          selected
        </div>
      </div>
    </div>
  );
}
