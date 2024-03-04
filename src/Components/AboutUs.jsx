import React from "react";

function AboutUs() {
  const policySections = [
    {
      title: "Welcome to Saer.pk – Your Gateway to Seamless Umrah Experiences!",
      content: "Saer.pk is a pioneering venture in the realm of travel, specifically designed to elevate your Umrah pilgrimage experience. As the first-ever Pakistan Umrah package booking app, we are proud to be powered by Saer Karo Travel and Tours SMC Private Limited, a trusted name in the travel industry."
    },
    {
      title: "Our Founder: Ahsan Raza Butt",
      content: "At the heart of Saer.pk is the vision and dedication of our founder, Ahsan Raza Butt. With a passion for making travel accessible and convenient, Ahsan embarked on a mission to revolutionize the way individuals plan and embark on their spiritual journeys. His commitment to excellence and customer satisfaction has been the driving force behind Saer.pk's success."
    },

    {
        title: "About Saer.pk",
        content: "Saer.pk is not just an app; it's a comprehensive platform that caters to all your travel needs. Whether you are planning your Umrah pilgrimage or exploring domestic and international destinations, we have you covered."
      },
  
      {
        title: "Umrah Packages",
        content: "Discover a seamless and hassle-free way to book your Umrah packages through our user-friendly app. Saer.pk offers a range of packages that suit every traveler's preferences and budget, ensuring a spiritually enriching experience."
      },
  



    {
      title: "Our Services:",
      content: [
        "1. Hotel Booking: Saer.pk makes hotel bookings easy and budget-friendly, ensuring a comfortable stay during your travels.",
        "2. Visa Assistance:Simplify the visa application process with Saer.pk's comprehensive assistance, making border crossings smooth.",
        "3. Air Ticketing:          Book domestic and international flights effortlessly with Saer.pk's user-friendly interface.",
        "4. Trips and Tours: Explore diverse destinations with Saer.pk's curated trips and tours, offering memorable adventures for every traveler.",
        "5. Travel Insurance: Travel confidently with Saer.pk's insurance options, ensuring peace of mind on every journey."

      ]
    },
    {
      title: "Powered by Saer Karo Travel and Tours SMC Private Limited",
      content: [
        "As a subsidiary of Saer Karo Travel and Tours SMC Private Limited, Saer.pk benefits from the extensive expertise and industry knowledge of a company that has been a leader in the travel sector. Our association ensures that you receive top-notch service and reliability every step of the way."
      ]
    },
    {
      title: "Beyond Umrah: Complete Travel Solutions",
      content: "Saer.pk goes beyond Umrah bookings; we are your one-stop solution for all travel-related services. Whether you need air ticketing, visa assistance, travel insurance, or accommodation in hotels, we are here to simplify your travel experience."
    },
    {
      title: "Domestic and International Travel",
      content: "Explore the world with Saer.pk. From domestic getaways to international adventures, our app is your gateway to a vast array of travel options. Plan your trips effortlessly and embark on unforgettable journeys with Saer.pk."
    },
    {
      title: "Why Choose Saer.pk?",
      content: [
        "Convenience: Our user-friendly app makes booking and managing your travel plans a breeze.",
        "Reliability: With Saer Karo Travel and Tours SMC Private Limited's backing, trust that your travel experience is in capable hands.",
        "Comprehensive Services: From Umrah packages to air ticketing and hotel bookings, we provide end-to-end travel solutions."
      ]
    },
    
  ];

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center bg-[#FAFAFA]">
          <h1 className="sm:text-4xl font-bold text-2xl py-5 text-[#A9A0A0]">
          About Us
          </h1>
        </div>

        {policySections.map((section, index) => (
          <div key={index} className="px-10 py-3 mt-5">
            <h1 className="text-xl font-bold text-[#A9A0A0]">{section.title}</h1>
            {typeof section.content === "string" ? (
              <p className="text-sm text-gray-500 flex-wrap mt-2">{section.content}</p>
            ) : (
              <ul className="list-none text-sm text-gray-500 flex-wrap mt-2 space-y-3 px-5">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
                    {/* <p className="text-sm mt-3 text-gray-500">Embark on a journey of faith and exploration with Saer.pk. Your aspirations are our priority, and we are committed to making your travel experiences memorable and worry-free. Welcome to the future of travel – welcome to Saer.pk!</p> */}

          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;
