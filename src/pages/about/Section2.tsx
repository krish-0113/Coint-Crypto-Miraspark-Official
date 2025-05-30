"use client";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div 
      className="w-full px-4 md:px-8 lg:px-16 py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000, #000305, #000814, #000305, #000000)"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(139,0,255,0.1) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255,0,200,0.2) 0%, rgba(139,0,255,0.1) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Top Card: What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
          }}
        >
          <div 
            className="relative rounded-2xl p-6 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #000000, #001122, #000814)',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.15), inset 0 0 30px rgba(139, 0, 255, 0.1)'
            }}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "AI Summaries at Your Level:",
                  description: "Understand any article instantly — whether you're a Ph.D., a high school student, or a 10-year-old."
                },
                {
                  title: "Real-Time Alerts:",
                  description: "Get notified the moment breaking news affects your tracked coins or whole wallets."
                },
                {
                  title: "Bullish/Bearish Sentiment Scores:",
                  description: "Every headline is analyzed and scored by AI."
                },
                {
                  title: "Smart Coin Tracking:",
                  description: "Track up to 30+ coins and get a personalized feed based on your trading behavior."
                },
                {
                  title: "Multilingual Translation:",
                  description: "Instant AI translation into multiple languages."
                },
                {
                  title: "AI Q&A Assistant:",
                  description: "Ask about crypto terms in natural language and get intelligent answers."
                },
                {
                  title: "Pro Tools for Traders:",
                  description: "Volatility indicators, historical event reactions, and heatmaps to spot trends."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-cyan-900/20"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-cyan-300">{feature.title}</span>
                    <span className="text-gray-200 text-sm md:text-base ml-2">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* How We're Built */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
            }}
          >
            <div 
              className="relative rounded-2xl p-6 md:p-8 h-full"
              style={{
                background: 'linear-gradient(135deg, #000000, #001122, #000814)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.1), inset 0 0 20px rgba(139, 0, 255, 0.05)'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text"
                  style={{
                    background: "linear-gradient(90deg, #00f0ff, #8b00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  How We're Built
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Multi-source news aggregation",
                  "Real-time global data extraction", 
                  "Multilingual AI summarization",
                  "Multilingual AI translation",
                  "Advanced market insights"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-900/30 to-gray-800/20 border border-cyan-900/10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <span className="text-gray-200 text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Who We're For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
            }}
          >
            <div 
              className="relative rounded-2xl p-6 md:p-8 h-full"
              style={{
                background: 'linear-gradient(135deg, #000000, #001122, #000814)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.1), inset 0 0 20px rgba(139, 0, 255, 0.05)'
              }}
            >
              <div className="flex items-center mb-6">
                 <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text"
                  style={{
                    background: "linear-gradient(90deg, #8b00ff, #ff00c8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Who We're For
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Active traders looking for an edge",
                  "Long-term investors who want clarity",
                  "Crypto-curious learners desiring clear summaries",
                  "Global readers who need multilingual access"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-900/30 to-gray-800/20 border border-cyan-900/10"  
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                    <span className="text-gray-200 text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-pink-700/20"
                >
                  <p className="text-gray-200 text-sm md:text-base font-medium">
                    No matter your background — we help you understand, react, and invest smarter.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FeatureSection;