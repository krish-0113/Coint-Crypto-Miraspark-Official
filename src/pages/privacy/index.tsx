const PrivacyPolicy = () => {
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
        "CryptoDigest may use trusted third-party services for:",
        "- Payment processing (e.g., Stripe, PayPal)",
        "- Analytics (e.g., Google Analytics)",
        "- Cloud hosting (e.g., AWS, Firebase)",
        "These services may have access to limited user data as required to perform their function but are bound by confidentiality and data protection agreements.",
      ],
    },
    {
      title: "7. International Data Transfers",
      content: [
        "If you are located outside Australia, your data may be processed in countries with different data protection laws. By using CryptoDigest, you consent to such data transfers, including to Australia and other secure jurisdictions where our servers or partners are based.",
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
        "To exercise these rights, contact us at **privacy@cryptodigest.app**",
      ],
    },
    {
      title: "9. Children’s Privacy",
      content: [
        "CryptoDigest is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that a child has provided us personal data, we will delete it immediately.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy periodically. If we make material changes, we will notify users via email or prominent notice on the platform.",
        "Check the ‘Effective Date’ above to see when this policy was last updated.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "For any questions or concerns about this Privacy Policy or how your data is handled:",
        "**Email:** privacy@cryptodigest.app",
        "**CryptoDigest**",
        "Shop 27 Carlton St",
        "Melbourne VIC 3000",
        "Australia",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#010d12] text-white px-6 md:px-16 lg:px-40 py-16">
      <div className="max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">
          At CryptoDigest, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our platform.
          <br /><br />
          By accessing or using CryptoDigest (the “Platform”), you agree to the practices described in this Privacy Policy.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
            <div className="text-gray-400 space-y-2">
              {section.content.map((line, index) => {
                const isBold = line.startsWith("**") && line.endsWith("**");
                const cleanLine = line.replace(/\*\*/g, "");

                return (
                  <p key={index} className={isBold ? "font-semibold text-white" : ""}>
                    {cleanLine}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
