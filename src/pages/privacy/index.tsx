import React, { useEffect } from "react";

const PrivacyPolicy = () => {
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
      title: "1. Information We Collect",
      content: [
        "**a) Personal Information**",
        "- Name, email address, and account credentials when you register",
        "- Billing details when you subscribe to a paid plan (handled by secure third-party providers)",

        "**b) Usage Data**",
        "- IP address, browser type, device info, language preferences",
        "- Interaction with our features (articles viewed, alert settings)",
        "- Referrer data and session analytics (for improving performance)",

        "**c) Cookies & Tracking Technologies**",
        "We use cookies and similar technologies to enhance functionality, remember preferences, and understand usage patterns.",
        "You can manage cookie settings via your browser.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "- Provide and operate the Platform",
        "- Personalize user experience and news feed",
        "- Send alerts and notifications based on your preferences",
        "- Improve overall performance, UX, and AI accuracy",
        "- Respond to customer inquiries or support requests",
        "- Process transactions and manage billing",
        "- Enhance compliance with laws and platform policies",
        "We do not use your data for third-party advertising or sell it to external parties.",
      ],
    },
    {
      title: "3. Legal Basis for Data Processing",
      content: [
        "We process your personal data based on:",
        "- Your consent (e.g., signing in for email or alerts)",
        "- Our contractual obligation (e.g., providing subscription features)",
        "- Legitimate interests (e.g., personalization and improving the service)",
        "- Compliance with legal obligations",
      ],
    },
    {
      title: "4. How We Protect Your Information",
      content: [
        "We implement appropriate technical and organizational security measures, including:",
        "- SSL encryption",
        "- Secure infrastructure with third-party processors",
        "- Access restrictions within our systems",
        "- Regular security reviews and updates",
        "While no platform can guarantee 100% security, we do our best to keep your data safe.",
      ],
    },
    {
      title: "5. Data Retention",
      content: [
        "We retain your personal data only as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your data at any time (see Section 8).",
      ],
    },
    {
      title: "6. Third-Party Services",
      content: [
        "CoinDigest may use trusted third-party services for:",
        "- Payment processing (e.g., Stripe, PayPal)",
        "- Analytics (e.g., Google Analytics)",
        "- Cloud hosting (e.g., AWS, Firebase)",
        "These services may have access to limited user data as required to perform their function but are bound by confidentiality and data protection agreements.",
      ],
    },
    {
      title: "7. International Data Transfers",
      content: [
        "If you are located outside Australia, your data may be processed in countries with different data protection laws. By using CoinDigest, you consent to such data transfers, including to Australia and other secure jurisdictions where our servers or partners are based.",
      ],
    },
    {
      title: "8. Your Rights",
      content: [
        "Depending on your location, you may have the right to:",
        "- Access the data we hold about you",
        "- Request correction of inaccurate data",
        "- Request deletion (Right to be Forgotten)",
        "- Object to or restrict processing",
        "- Withdraw consent at any time",
        "- File a complaint with your local data protection authority",
        "To exercise these rights, contact us at **privacy@CoinDigest.app**",
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        "CoinDigest is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that a child has provided us personal data, we will delete it immediately.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy periodically. If we make material changes, we will notify users via email or prominent notice on the platform.",
        "Check the 'Effective Date' above to see when this policy was last updated.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "For any questions or concerns about this Privacy Policy or how your data is handled:",
        "**Email:** privacy@CoinDigest.app",
        "**CoinDigest**",
        "Shop 27 Carlton St",
        "Melbourne VIC 3000",
        "Australia",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Enhanced Dark Background with Multiple Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-black to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/80 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10"></div>
      </div>

      {/* Enhanced Animated Floating Orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-3000"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-40 py-16 pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Header Section with Glassmorphism Effect */}
          <div className="text-center mb-16 relative mt-8">
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-none transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-3xl p-8 shadow-2xl">
                <h1 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent tracking-tight">
                  Privacy Policy
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-4 rounded-full shadow-lg shadow-purple-500/30"></div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  At <span className="text-transparent bg-clip-text font-semibold bg-[linear-gradient(135deg,#00f0ff,#8b00ff,#ff00c8,#00f0ff)]">
  CoinDigest
</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our platform.
                </p>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
                  By accessing or using CoinDigest, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 blur-sm group-hover:opacity-75 group-hover:blur-none transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-gradient-to-br from-black via-gray-900/80 to-black border border-gray-800 rounded-2xl p-5 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
                  
                  {/* Section Header */}
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full mr-3 group-hover:h-6 transition-all duration-300 shadow-lg shadow-purple-500/30"></div>
                    <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-2 pl-5">
                    {section.content.map((line, index) => {
                      const isBold = line.startsWith("**") && line.endsWith("**") && !line.includes(":");
                      const isSubheading = line.startsWith("**") && line.includes(")");
                      const cleanLine = line.replace(/\*\*/g, "");
                      
                      if (line.startsWith("- ")) {
                        return (
                          <div key={index} className="flex items-start group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200 shadow-sm shadow-purple-400/30"></div>
                            <p className="text-gray-300 group-hover/item:text-gray-100 transition-colors duration-200 leading-relaxed text-sm">
                              {cleanLine.substring(2)}
                            </p>
                          </div>
                        );
                      }

                      if (isSubheading) {
                        return (
                          <h3 key={index} className="text-lg font-semibold text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text mt-4 mb-2">
                            {cleanLine}
                          </h3>
                        );
                      }

                      if (isBold) {
                        return (
                          <p key={index} className="text-white font-semibold leading-relaxed text-sm">
                            {cleanLine}
                          </p>
                        );
                      }
                      
                      if (line.includes("@") && line.includes(".")) {
                        return (
                          <p key={index} className="text-gray-300 leading-relaxed text-sm">
                            {cleanLine.split(" ").map((word, i) => 
                              word.includes("@") ? (
                                <a 
                                  key={i} 
                                  href={`mailto:${word}`}
                                  className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-medium hover:from-pink-400 hover:to-cyan-400 transition-all duration-300 cursor-pointer underline hover:no-underline"
                                >
                                  {word}{" "}
                                </a>
                              ) : (
                                word + " "
                              )
                            )}
                          </p>
                        );
                      }

                      if (line.includes("**") && line.includes(":")) {
                        const parts = cleanLine.split(":");
                        return (
                          <p key={index} className="text-gray-300 leading-relaxed text-sm">
                            <span className="text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text font-semibold">
                              {parts[0]}:
                            </span>
                            {parts.slice(1).join(":")}
                          </p>
                        );
                      }
                      
                      return (
                        <p key={index} className="text-gray-300 hover:text-gray-100 transition-colors duration-200 leading-relaxed text-sm">
                          {cleanLine}
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
            transform: translateY(30px);
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

export default PrivacyPolicy;