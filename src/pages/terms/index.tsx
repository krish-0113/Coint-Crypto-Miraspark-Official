import React from "react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By using the CryptoDigest platform, you agree to comply with and be legally bound by these Terms, our Privacy Policy, and any other guidelines or policies referenced herein.",
      ],
    },
    {
      title: "2. Platform Overview",
      content: [
        "CryptoDigest provides users with AI-enhanced crypto news summaries, sentiment analysis, real-time alerts, coin tracking tools, and other informational features. All content is for informational purposes only and should not be considered financial or investment advice.",
      ],
    },
    {
      title: "3. Eligibility",
      content: [
        "You must be at least 18 years old to use this platform. By using CryptoDigest, you confirm that you are legally eligible to enter into this agreement and use the services under applicable law.",
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
        "CryptoDigest offers subscription-based access to premium features. By subscribing, you agree to the pricing, billing frequency, and features outlined on our website.",
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
        "All content on the Platform, including text, software, AI summaries, design elements, logos, and graphics, is the property of CryptoDigest or its licensors. You may not reproduce or redistribute content without consent.",
      ],
    },
    {
      title: "7. Refund Policy",
      content: [
        "We do not offer refunds for partially used subscription periods. You may cancel at any time, and your access continues until the end of your billing cycle. For disputes, contact support@cryptodigest.app.",
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
        "CryptoDigest may link to third-party websites or services. We are not responsible for their content or practices. Use them at your own risk.",
      ],
    },
    {
      title: "10. Disclaimer of Warranties",
      content: [
        "CryptoDigest is provided “as is” and “as available.” We do not guarantee uninterrupted service, accuracy of content, or financial outcomes.",
      ],
    },
    {
      title: "11. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, CryptoDigest and its team shall not be liable for any indirect, incidental, or consequential damages.",
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
        "Email: privacy@cryptodigest.app",
        "CryptoDigest",
        "Shop 8/271 Collins St",
        "Melbourne VIC 3000",
        "Australia",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#010d12] text-white px-6 md:px-16 lg:px-40 py-16">
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>

        <p className="text-gray-400 mb-12">
          Welcome to CryptoDigest — your AI-powered crypto news intelligence platform. By accessing or using CryptoDigest (the “Platform”), whether via web or mobile app, you agree to be bound by the following Terms and Conditions (“Terms”). If you do not agree with any part of these Terms, please do not use the Platform.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
            <div className="text-gray-400 space-y-2">
              {section.content.map((line, index) => {
                // Check if line is a bullet point for list formatting
                if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="list-disc list-inside pl-4">
                      {line.substring(2)}
                    </li>
                  );
                }
                // Otherwise, normal paragraph text
                return <p key={index}>{line}</p>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
