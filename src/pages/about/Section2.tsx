"use client";

const FeatureSection = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-20  text-white">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Top Card: What Makes Us Different */}
        <div className="relative bg-[#101418] border border-cyan-900/40 rounded-2xl p-6 md:p-10 shadow-[0_0_30px_#00FFFF22] ">
        
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
            What Makes Us Different
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-200 text-sm md:text-base">
            
            <li>
              <strong>AI Summaries at Your Level:</strong> Understand any article instantly — whether you're a Ph.D., a high school student, or a 10-year-old.
            </li>
            <li>
              <strong>Real-Time Alerts:</strong> Get notified the moment breaking news affects your tracked coins or whole wallets.
            </li>
            <li>
              <strong>Bullish/Bearish Sentiment Scores:</strong> Every headline is analyzed and scored by AI.
            </li>
            <li>
              <strong>Smart Coin Tracking:</strong> Track up to 30+ coins and get a personalized feed based on your trading behavior.
            </li>
            <li>
              <strong>Multilingual Translation:</strong> Instant AI translation into multiple languages.
            </li>
            <li>
              <strong>AI Q&A Assistant:</strong> Ask about crypto terms in natural language and get intelligent answers.
            </li>
            <li>
              <strong>Pro Tools for Traders:</strong> Volatility indicators, historical event reactions, and heatmaps to spot trends.
            </li>
          </ul>
        </div>

        {/* Bottom Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* How We’re Built */}
          <div className="bg-[#101418] border border-cyan-900/40 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_#00FFFF22]">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-cyan-400">
              How We’re Built
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
              <li>Multi-source news aggregation</li>
              <li>Real-time global data extraction</li>
              <li>Multilingual AI summarization</li>
              <li>Multilingual AI translation</li>
              <li>Advanced market insights</li>
            </ul>
          </div>

          {/* Who We’re For */}
          <div className="bg-[#101418] border border-cyan-900/40 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_#00FFFF22]">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-cyan-400">
              Who We’re For
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
              <li>Active traders looking for an edge</li>
              <li>Long-term investors who want clarity</li>
              <li>Crypto-curious learners desiring clear summaries</li>
              <li>Global readers who need multilingual access</li>
              <li>
                No matter your background — we help you understand, react, and invest smarter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
