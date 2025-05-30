import { motion } from "framer-motion";
import {
  MdSupport,
  MdBusinessCenter,
  MdOutlineNewspaper,
  MdBugReport,
  MdLocationOn,
  MdFeedback,
} from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ContactUs = () => {
  const cardData = [
    {
      icon: <MdSupport className="text-cyan-400 text-xl " />,
      title: "General Inquiries & Support",
      content: [
        "For help with your account, subscription, alerts, or any technical issues.",
        "support@cryptodigest.app",
        "We aim to respond within 24–48 hours, Monday to Friday.",
      ],
    },
    {
      icon: <MdBusinessCenter className="text-blue-400 text-xl " />,
      title: "Business & Partnership Opportunities",
      content: [
        "Want to collaborate with us, list your project, or explore strategic partnerships?",
        "partners@cryptodigest.app",
        "Please include relevant details about your brand, project, or proposal.",
      ],
    },
    {
      icon: <MdOutlineNewspaper className="text-yellow-400 text-xl " />,
      title: "Press & Media",
      content: [
        "For interviews, press kits, or to feature CryptoDigest in your publication.",
        "media@cryptodigest.app",
      ],
    },
    {
      icon: <MdBugReport className="text-red-400 text-xl " />,
      title: "Report a Bug or Security Concern",
      content: [
        "Found something off? We take security seriously and appreciate all reports made responsibly.",
        "security@cryptodigest.app",
      ],
    },
    {
      icon: <MdLocationOn className="text-green-400 text-xl " />,
      title: "Mailing Address",
      content: [
        "CryptoDigest",
        "Shop 21 Carlton Street",
        "Sydney NSW 2000",
        
      ],
    },
    {
      icon: <MdFeedback className="text-purple-400 text-xl " />,
      title: "Suggestions & Feedback",
      content: [
        "We're building CryptoDigest for you — and your ideas shape the future of this platform. Feel free to drop your suggestions.",
        "feedback@cryptodigest.app",
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 md:px-10 lg:px-24 py-20 text-white relative bg-black">
      {/* Subtle dark blue gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-slate-900 opacity-80 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-950 opacity-30 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-indigo-950 opacity-20 pointer-events-none z-0"></div>
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-2 text-left mt-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 mb-8 md:mb-12 text-left max-w-2xl"
        >
          At CryptoDigest, we're always here to help. Whether you have a
          question, feedback, or business inquiry, our team is ready to assist
          you.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cardData.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Gradient Border Wrapper */}
              <div 
                className="p-[1px] rounded-lg transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3),0_0_60px_rgba(139,0,255,0.2)]"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                }}
              >
                {/* Inner Card */}
                <div className="bg-gradient-to-br from-[#080812] to-[#0a0a15] rounded-lg p-6 cursor-pointer transition-all duration-500 group-hover:from-[#0c0c18] group-hover:to-[#0e0e1b] group-hover:shadow-inner h-full">
                  <div className="flex items-center mb-4 space-x-3">
                    <div className="relative">
                      {/* Icon Gradient Background */}
                      <div 
                        className="w-10 h-10 rounded-full p-[1px] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        style={{
                          background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                        }}
                      >
                        <span className="bg-gradient-to-br from-gray-900 to-black w-full h-full flex items-center justify-center rounded-full">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-white leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                      {item.title}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {item.content.map((text, idx) => (
                      <p
                        key={idx}
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          text.includes("@") 
                            ? "text-cyan-400 font-medium group-hover:text-cyan-300" 
                            : "text-gray-300 group-hover:text-gray-200"
                        }`}
                      >
                        {text.includes("@") ? `Email: ${text}` : text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;