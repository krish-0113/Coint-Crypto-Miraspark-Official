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
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
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
        "Australia",
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
    <div className="w-full min-h-screen px-4 md:px-10 lg:px-24 py-20 text-white relative">
          <img
        src="/img/green.svg"
        alt="Green Light"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-70 z-0"
      />
      <div className="max-w-6xl mx-auto">
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
          At CryptoDigest, we’re always here to help. Whether you have a
          question, feedback, or business inquiry, our team is ready to assist
          you.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cardData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0b1b22] p-6 rounded-lg border border-[#00cfff]/20 shadow-[0_0_10px_#00cfff22] hover:shadow-[0_0_20px_#00cfff55] transition-all duration-300 cursor-pointer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-2 space-x-3">
                <span className="bg-cyan-950 w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400/30 shadow-md">
                  {item.icon}
                </span>
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
              </div>
              {item.content.map((text, idx) => (
                <p
                  key={idx}
                  className={`text-sm ${
                    text.includes("@") ? "text-cyan-400" : "text-gray-200"
                  } ${idx !== 0 ? "mt-1" : "mb-2"}`}
                >
                  {text.includes("@") ? `Email: ${text}` : text}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
