import React from "react";

function PrivacyPolicy() {
  const policySections = [
    {
      title: "Privacy Policy for SAER.PK - Your Trusted Partner in Umrah and Premium Travel",
      content: "At SAER.PK, we take immense pride in being Pakistan's foremost and premium travel agency, specializing in Umrah packages. Led by our founder, Ahsan Raza Butt, SAER.PK is committed to ensuring the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you engage with our services for flights, hotels, visas, domestic and international trips, insurance, and our distinctive Umrah packages."
    },
    {
      title: "Ahsan Raza Butt - Leading the Journey to Excellence",
      content: "Founded by Ahsan Raza Butt, SAER.PK embodies a commitment to excellence in the realm of travel services. Recognizing the sacred significance of Umrah and the importance of privacy, Ahsan Raza Butt has instilled a culture of trust, respect, and unmatched service in every aspect of our operations."
    },
    {
      title: "Information We Collect:",
      content: [
        "1. Personalized Umrah Packages: To tailor our Umrah packages to your preferences, we collect personal information such as your name, contact details, and special requests.",
        "2. Travel Essentials: For flights, hotels, visas, and insurance services, we gather necessary information to ensure a seamless and secure booking process.",
        "3. Umrah Journey Enhancements: Understanding the unique nature of Umrah, we collect information related to your religious preferences and any specific requirements to enhance your spiritual journey.",
        "4. Communication Data: Your communication data, including emails and customer support interactions, allows us to provide efficient assistance and maintain a strong connection with you."
      ]
    },
    {
      title: "How We Share Your Information:",
      content: [
        "**Trusted Partners:** SAER.PK may share your information with trusted partners involved in delivering specific services, ensuring a comprehensive and integrated travel experience.",
        "Legal Compliance: We may disclose your information when required by law or to protect the rights, property, and safety of SAER.PK and its clients."
      ]
    },
    {
      title: "Security Measures",
      content: "SAER.PK, under the leadership of Ahsan Raza Butt, employs robust security measures to safeguard your information against unauthorized access, ensuring the highest level of privacy protection."
    },
    {
      title: "Your Choices:",
      content: "You have the right to manage your preferences and choices regarding the use of your information. SAER.PK respects your autonomy and is dedicated to fulfilling your requests promptly."
    },
    {
      title: "Updates to Privacy Policy:",
      content: "SAER.PK may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We encourage you to review this policy regularly."
    },
    {
      title: "Connect with Ahsan Raza Butt - Your Sacred Journey Awaits:",
      content: [
        "For any privacy-related inquiries or requests, please contact our dedicated team at [privacy@saer.pk].",
        "Embark on a sacred journey with SAER.PK - Where Privacy Meets Spirituality, Curated by Ahsan Raza Butt."
      ]
    }
  ];

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center bg-[#FAFAFA]">
          <h1 className="sm:text-4xl text-2xl py-5 text-[#A9A0A0]">
            Privacy policy
          </h1>
        </div>

        {policySections.map((section, index) => (
          <div key={index} className="px-10 py-3 mt-5">
            <h1 className="text-xl font-bold text-[#A9A0A0]">{section.title}</h1>
            {typeof section.content === "string" ? (
              <p className="text-sm text-gray-500 flex-wrap mt-2">{section.content}</p>
            ) : (
              <ul className="list-none text-sm text-gray-500 flex-wrap mt-2 space-y-5 px-5">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default PrivacyPolicy;
