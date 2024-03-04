import React from "react";

function TermsAndConditions() {
  const listItems = [
    {
      title: "Acceptance of Terms:",
      content:
        "By accessing SAER.PK, you acknowledge and agree to abide by these Terms of Use. If you do not agree with any part of these terms, please refrain from using our services.",
    },
    {
      title: "Service Description:",
      content:
        "SAER.PK offers a range of travel-related services, including but not limited to flights, hotels, visas, domestic and international trips, insurance, and specialized Umrah packages. The availability of these services is subject to change without notice.",
    },
    {
      title: "User Account:",
      content:
        "To access certain features of SAER.PK, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
    },

    {
      title: "Booking and Payments:",
      content:
        "When making reservations or purchases through SAER.PK, you agree to provide accurate and up-to-date information. Payments are processed securely, and you are responsible for any fees or charges associated with your bookings.      ",
    },
    {
      title: "User Conduct:",
      content:
        "You agree to use SAER.PK for lawful purposes and in a manner that does not violate the rights of others or inhibit their use of the platform. Any unauthorized use may result in the termination of your account.",
    },
    {
      title: "Privacy Policy:",
      content:
        "Your use of SAER.PK is also governed by our Privacy Policy. By using our services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.",
    },
    {
      title: "Intellectual Property:",
      content:
        "All content and materials on SAER.PK, including but not limited to text, images, logos, and software, are the property of SAER.PK and are protected by intellectual property laws. You agree not to use, reproduce, or distribute any content without prior written consent.      ",
    },
    {
      title: "Termination of Services:",
      content:
        "SAER.PK reserves the right to terminate or suspend your access to the platform, without prior notice, for any reason, including but not limited to a breach of these Terms of Use.",
    },
    {
      title: "Limitation of Liability:",
      content:
        "SAER.PK is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our services.",
    },
    {
      title: "Governing Law:",
      content:
        "These Terms of Use are governed by and construed in accordance with the laws of Pakistan. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan.",
    },
    {
      title: "Updates to Terms:",
      content:
        "SAER.PK may update these Terms of Use from time to time. Continued use of the platform after such changes constitutes your acceptance of the modified terms.",
    },

    // Add more list items as needed
  ];

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center bg-[#FAFAFA]">
          <h1 className="sm:text-4xl text-2xl py-5 text-[#A9A0A0]">
            Term & Conditions
          </h1>
        </div>

        <div className="px-10 py-3">
          <h1 className="text-xl font-bold text-[#A9A0A0]">
            Terms of Use for SAER.PK - Your Gateway to Exceptional Travel
            Experiences
          </h1>

          <h1 className="py-5 text-[#A9A0A0]">*Last Updated: [Date]</h1>

          <p className="text-sm text-gray-500 flex-wrap mt-3">
            Welcome to SAER.PK - Pakistan's premier travel agency, committed to
            providing you with unparalleled services for flights, hotels, visas,
            domestic and international trips, insurance, and our distinguished
            Umrah packages. These Terms of Use govern your access and use of the
            SAER.PK website and services. By using our platform, you agree to
            comply with these terms. Please read them carefully.
          </p>
        </div>

        <div className="px-10 py-3">
          <ul className="list-decimal space-y-5">
            {listItems.map((item, index) => (
              <li key={index} className="text-xl font-bold text-[#A9A0A0]">
                {item.title}
                <p className="text-[13px] text-gray-500 flex-wrap">
                  {item.content}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-3 py-2">
          <h1 className="text-xl font-bold text-[#A9A0A0]">
            Contact Us:
            <p className="text-xs text-gray-500 flex-wrap">
              For any inquiries or concerns regarding these Terms of Use, please
              contact us at [support@saer.pk].
            </p>
            <p className="text-xs text-gray-500 flex-wrap my-5">
              Thank you for choosing SAER.PK - Your Journey Begins Here.
            </p>
          </h1>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
