import React, { useEffect } from "react";

const TermsAndConditions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By using the CoinDigest platform, you agree to comply with and be legally bound by these Terms, our Privacy Policy, and any other guidelines or policies referenced herein.",
      ],
    },
    {
      title: "2. Platform Overview",
      content: [
        "CoinDigest provides users with AI-enhanced crypto news summaries, sentiment analysis, real-time alerts, coin tracking tools, and other informational features. All content is for informational purposes only and should not be considered financial or investment advice.",
      ],
    },
    {
      title: "3. Eligibility",
      content: [
        "You must be at least 18 years old to use this platform. By using CoinDigest, you confirm that you are legally eligible to enter into this agreement and use the services under applicable law.",
      ],
    },
    {
      title: "4. Account Registration & Security",
      content: [
        "To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.",
      ],
    },
    {
      title: "5. Subscription Plans & Billing",
      content: [
        "CoinDigest offers subscription-based access to premium features. By subscribing, you agree to the pricing, billing frequency, and features outlined on our website.",
        "Subscription tiers include:",
        "- Free Tier (Quick Scope): Limited access to summaries and features.",
        "- Pro Digest ($10/month): Up to 10 tracked coins, sentiment detection, multilingual translation, personalized feeds.",
        "- Alpha Digest ($22/month): All Pro features plus AI Q&A, unlimited coin tracking, real-time alerts, and advanced tools.",
        "Your subscription renews automatically unless canceled before the renewal date. Refunds are handled in accordance with our refund policy.",
      ],
    },
    {
      title: "6. Intellectual Property",
      content: [
        "All content on the Platform, including text, software, AI summaries, design elements, logos, and graphics, is the property of CoinDigest or its licensors. You may not reproduce or redistribute content without consent.",
      ],
    },
    {
      title: "7. Refund Policy",
      content: [
        "We do not offer refunds for partially used subscription periods. You may cancel at any time, and your access continues until the end of your billing cycle. For disputes, contact support@CoinDigest.app.",
      ],
    },
    {
      title: "8. User Conduct",
      content: [
        "You agree not to:",
        "- Use the platform for illegal or unauthorized purposes",
        "- Reverse-engineer or scrape the platform",
        "- Misrepresent your identity",
        "- Share your login",
        "- Upload harmful code or disrupt services",
        "We may suspend or terminate accounts for violating these rules.",
      ],
    },
    {
      title: "9. Third-Party Services",
      content: [
        "CoinDigest may link to third-party websites or services. We are not responsible for their content or practices. Use them at your own risk.",
      ],
    },
    {
      title: "10. Disclaimer of Warranties",
      content: [
        "CoinDigest is provided 'as is' and 'as available'. We do not guarantee uninterrupted service, accuracy of content, or financial outcomes.",
      ],
    },
    {
      title: "11. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, CoinDigest and its team shall not be liable for any indirect, incidental, or consequential damages.",
      ],
    },
    {
      title: "12. Modifications to Terms",
      content: [
        "We may update these Terms periodically. Changes will be posted on our site. Continued use means acceptance of the new Terms.",
      ],
    },
    {
      title: "13. Governing Law",
      content: [
        "These Terms are governed by the laws of Victoria, Australia, without regard to conflict of laws principles.",
      ],
    },
    {
      title: "14. Contact Us",
      content: [
        "For any questions or concerns about these Terms or how your data is handled:",
        "Email: privacy@CoinDigest.app",
        "CoinDigest",
        "Shop 8/271 Collins St",
        "Melbourne VIC 3000",
        "Australia",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/80 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
      </div>

      {/* Subtle Animated Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-8">
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-none transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Terms & Conditions
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Welcome to <span className="text-transparent bg-clip-text font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)]">
  CoinDigest
</span>
 — your AI-powered crypto news intelligence platform.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl opacity-0 blur-sm group-hover:opacity-75 group-hover:blur-none transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-gradient-to-br from-black via-gray-900/80 to-black border border-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300">
                  {/* Section Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full mr-3"></div>
                    <h2 className="text-lg md:text-xl font-semibold text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-3 pl-4">
                    {section.content.map((line, index) => {
                      if (line.startsWith("- ")) {
                        return (
                          <div key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3"></div>
                            <p className="text-sm text-gray-300">
                              {line.substring(2)}
                            </p>
                          </div>
                        );
                      }
                      
                      return (
                        <p key={index} className="text-sm text-gray-300">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtle Animation Section - Added above bottom fade */}
          <div className="relative z-30 flex flex-col items-center justify-center mt-12 mb-0">
            {/* Subtitle with Subtle Animation */}
            <div
              className="max-w-2xl text-lg text-center text-gray-300 leading-relaxed opacity-0 transform translate-y-5"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
              }}
            >
             
            </div>
           
            {/* Decorative Elements */}
            <div
              className="flex items-center gap-2 mt-4 opacity-0 transform scale-80"
              style={{
                animation: 'fadeInScale 0.8s ease-out 0.6s forwards'
              }}
            >
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#00f0ff]"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8b00ff] animate-pulse"></div>
              <div className="w-8 h-[1px] bg-gradient-to-r from-[#8b00ff] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade with Blue Tint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 via-blue-950/30 to-transparent z-25" />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;