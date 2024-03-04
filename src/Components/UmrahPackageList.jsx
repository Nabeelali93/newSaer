import React from "react";
import { Link } from "react-router-dom";

const PackageCard = () => {
  // Package data ka array
  const packages = [
    {
      title: "Umrah Packages List For 21 Days",
      includes: [
        "Umrah Visa 21 days",
        "Bus transport for entire journey included.",
        "Stay at Saif Ul Majd Makkah Hotel.",
        "Stay at Rou Taiba Makkah Hotel.",
        "Saudi Airlines Comfort Return Ticket.",
      ],
      prices: [
        "Adult: PKR. 210,000/.",
        "Child: PKR. 210,000/.",
        "Infant: PKR. 210,000/.",
      ],
      note: "Note: Adults: 18 years and above, Child: 2 to 12 years, Infants: Under 2 years.",
    },

    // Zyaada package data objects jitni zarurat ho unko add karein
  ];

  return (
    <div>
      {packages.map((packageData, index) => (
        <div key={index}>
          <div className=" border-b-2 border-t-2 p-2 px-5 font-bold text-lg">
            <h1>{packageData.title}</h1>
          </div>

          <div className="max-w-screen-lg mx-auto p-6 m-6 bg-white rounded-xl border-2">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-lg font-semibold mb-2">
                  This package includes these things:
                </h2>
                <ul className="list-decimal text-gray-500 text-base pl-5 space-y-1">
                  {packageData.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between gap-2">
                  {packageData.prices.map((price, index) => (
                    <span
                      key={index}
                      className="p-2 border-2 rounded-lg text-[#1476D1]"
                    >
                      {price}
                    </span>
                  ))}
                </div>
                <p className="text-sm italic">
                  <span className="font-bold text-red-500">Note:</span>{" "}
                  {packageData.note}
                </p>
               <Link to={"/stepper"}>
               <button className="mt-4 bg-[#1476D1] text-white font-bold py-2 px-4 rounded hover:bg-[#376c9d] focus:outline-none focus:shadow-outline">
                  Click Here Reserve Your Spot for Umrah Now
                </button>
               
               </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
