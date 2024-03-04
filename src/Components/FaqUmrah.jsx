import React from "react";
import { Link } from "react-router-dom";

function FaqUmrah() {
  // Data for FAQ items
  const faqItems = [
    {
      title: "Budget:",
      content: "Determine your budget for the Umrah trip. Packages can vary widely in price, so having a clear budget in mind will help you narrow down your options."
    },
    {
      title: "Inclusions:",
      content: "Review what is included in the package. Typical inclusions are flights, accommodation, transportation within Saudi Arabia, and visa processing. Some packages may also include meals and guided tours."
    },
    {
      title: "Accommodation:",
      content: "Check the quality and location of the hotels included in the package. Consider your comfort and proximity to the holy sites in Makkah and Madinah."
    },
    {
      title: "Group Size:",
      content: "Find out the size of the group you'll be traveling with. Smaller groups may offer a more personalized experience, while larger groups might be more cost-effective."
    },
    {
      title: "Travel Dates:",
      content: "Be flexible with your travel dates if possible. Prices can vary depending on the time of year, so choosing off-peak times may help you get a better deal."
    },
    {
      title: "Visa Processing:",
      content: "Ensure that the package includes visa processing, as obtaining an Umrah visa can be a complex process. Check if the agency provides assistance with the visa application."
    },
    {
      title: "Travel Agency Reputation:",
      content: "Research the reputation and reviews of the travel agency or tour operator offering the package. Look for testimonials and feedback from previous customers."
    },
    {
      title: "Customer Support:",
      content: "Assess the level of customer support offered by the travel agency. Consider how they handle inquiries, emergencies, and support during your journey."
    }
  ];

  return (
    <>
      <div className="flex flex-col bg-white">
        {/* Header section */}
        <div className="self-stretch flex w-full flex-col max-md:max-w-full">
          <div className="self-stretch flex w-full flex-col px-5  max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1356px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap"></div>
          </div>

          {/* Special deals banner */}
          <div
            className="flex-col  flex md:h-[575px] w-full h-[200px]   max-md:max-w-full"
            style={{
              backgroundImage:
                'url("https://s3-alpha-sig.figma.com/img/38b2/72cf/6b1016209b87f7f8a1bdecf3989b7dec?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUDpi~t4PZG50boBK2CyW88ryXRlgGNKQZTMSMlHC4wUFtTMRHQ559n98OvS6U~ylBf2aOV2p7y3HX3sVOiQsIj8wNAOjUykq2T-edrnhKRWHsavyTg3xH4kCglqiwwQ7bTHtR3kXyPa79cSnNSGAmbxq7L3ScscKZ0hUzaQMrV-Msy7NPFP4rqhIctjdOtBsq9V9~BQ6tFPAI2aMPs1BgZjVtldpiFnYRGzlIRsfIdYwPS0-YAz6lHiMUyg2lq2p9vzijp1LxlFNxt5OHyTOgZS3nTUQDI-7BFLnwJZQPNFoGnhKara~Ir9vkHLAcMd5V80QBgaqwZYLerEgRXfXw__")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "contain",
            }}
          >
            <p className="justify-center font-bold flex md:mt-[13%] mt-[18%] md:mx-auto text-white md:text-[40px]">
              Special deals for Umrah package
            </p>
            <p className="flex justify-center  text-white md:text-[24px] text-[12px]">
              20% off on 21-day Umrah package, valid until 2023-7-2
            </p>
          </div>
        </div>

        {/* FAQ section */}
        <div className="self-center   flex w-full max-w-[1326px] flex-col mt-20 px-5 max-md:max-w-full max-md:mt-10 ">
          <div className="  self-start max-md:max-w-full ">
           <h1 className="text-black md:text-3xl text-xl  font-semibold"> FAQ About deals for Umrah package</h1>
          </div>
          {/* Mapping over FAQ items */}
          {faqItems.map((item, index) => (
            <div key={index} className="items-start self-stretch flex flex-col mt-11 max-md:max-w-full max-md:mt-10">
              <div className="text-black md:text-xl text-[18px] font-medium ">
                {item.title}
              </div>
              <div className="text-neutral-400 text-[16px] mt-5  ml-8 ">
                <ul className="list-disc">
                  <li>{item.content}</li>
                </ul>
              </div>
            </div>
          ))}
          {/* Button */}
          <div  className="justify-center my-5 items-center bg-[#1476D1] flex md:w-[250px] w-[200px]  grow flex-col mr-12 mt-28 px-5 md:py-3.5 py-2 rounded-lg self-end max-md:mr-2.5 max-md:mt-10">
            <div className="text-white cursor-pointer md:text-[16px] text-[14px] font-medium self-center whitespace-nowrap">
              <Link to={"/specialdeals"}>Continue with deals offer</Link>
            </div>
          </div>

  



        </div>
      </div>
    </>
  );
}

export default FaqUmrah;
