import React from 'react'
import DatePicker from '../Common/DatePicker';
import "../App.css"






function SpecialDeals() {


    const startDate = new Date(2023, 0, 2); // January 20, 2023
    const numberOfDays = 30; // Number of days to display
  






  return (

<>


<div>
        <div className="banner flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white md:text-4xl text-[30px] font-semibold">
              Special deals for umrah pakkage
            </h1>
            <h1 className="text-white text-center font-semibold">
              20% of on 21day umrah package 2023-7-2
            </h1>
          </div>
        </div>
        <div className="py-2">
          <div className="text-center py-2">
            <h1 className="md:text-3xl text-2xl text-[#06335D] font-bold pb-2">
              Total Hassle-Free Umrah Offering
            </h1>
            <h1 className="text-xs text-[#06335D] font-semibold">
              At Saer.pk, we guarantee a seamless and trouble-free Umrah journey
              for our customers,{" "}
            </h1>
            <h1 className="text-xs text-[#06335D] font-semibold">
              ensuring they encounter no hassles or challenges throughout their
              pilgrimage experience with our comprehensive Umrah packages.
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 border border-t-gray-500 border-b-gray-500 py-2 my-2">
          <div>
            <h1 className="md:text-base text-[13px] text-[#06335D] font-semibold">
              Select travel date
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="md:text-base text-[13px] text-[#06335D] font-semibold">
              Select Umrah Duration
            </h1>
            <h1 className="text-sm text-[#06335D] font-semibold">21 days</h1>
          </div>
        </div>
        <div className="py-2 px-4 scrollbar-hide">
          {/* <div className='border border-red-300 w-32 text-center  py-4 rounded-xl'>
    <h1>20</h1>
    <h1>January</h1>
</div> */}
          <DatePicker startDate={startDate} numberOfDays={numberOfDays} />
        </div>
        {/* pkg card */}
        <div className="flex flex-col md:flex-row gap-10 p-10 w-[100%]">
          <div className="flex-1 bg-white rounded-2xl shadow p-6  ">
            <h3 className="font-semibold text-[25px] mb-4 text-center">
              This package includes these things:
            </h3>
            <ul className="list-decimal pl-5 mb-4 text-[20px] text-[#06335D80]">
              <li>Umrah Visa 21 days</li>
              <li>Bus transport for entire journey included.</li>
              <li>Stay at Saif Ul Majd Makkah Hotel.</li>
              <li>Stay at Rou Taiba Makkah Hotel.</li>
              <li>Saudi Airlines Comfort Return Ticket.</li>
            </ul>
            <div className="mb-4 flex flex-wrap text-[17px] gap-3 justify-center">
              <div className="font-semibold border  border-[#06335D80] text-[#1476D1] rounded-lg p-1 px-3 ">
                Adult: PKR. 210,000/-
              </div>
              <div className="font-semibold border  border-[#06335D80] text-[#1476D1] rounded-lg p-1 px-3 ">
                Child: PKR. 210,000/-
              </div>
              <div className="font-semibold border  border-[#06335D80] text-[#1476D1] rounded-lg p-1 px-3 ">
                Infant: PKR. 210,000/-
              </div>
            </div>
            <p className="text-[17px] mb-6 text-center px-10">
              {" "}
              <span className="text-[#CC3C3C] ">Note:</span> Adults: 18 years
              and above, Child: 2 to 12 years, Infants: Under 2 years
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white  py-2 px-4 rounded-2xl hover:bg-blue-600">
                Click Here Reserve Your Spot for Umrah Now
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow p-6   ">
            <h3 className="font-semibold mb-4 text-center text-[25px]">
              FAQ About Deals For Umrah Package:
            </h3>
            <p className="mb-1 font-bold text-[19px]">Accommodation:</p>
            <p className=" mb-1 text-[#A5A5A5] text-[17px]">
              Check The Quality And Location Of The Hotels Included In The
              Package. Consider Your Comfort And Proximity To The Holy Sites In
              Makkah And Madinah.
            </p>
            <p className="mb-1 font-bold text-[19px]">Accommodation:</p>
            <p className=" mb-1 text-[#A5A5A5] text-[17px]">
              {" "}
              and proximity to the holy sites in Makkah and Madinah.
            </p>

            <p className="mb-1 font-bold text-[19px]">Accommodation:</p>
            <p className=" mb-1 text-[#A5A5A5] text-[17px]">
              Check The Quality And Location Of The Hotels Included In The
              Package. Consider Your Comfort And Proximity To The Holy Sites In
              Makkah And Madinah.
            </p>
            <p className="mb-1 font-bold text-[19px]">Accommodation:</p>
            <p className=" mb-1 text-[#A5A5A5] text-[17px]">
              Check The Quality And Location Of The Hotels Included In The
              Package. Consider Your Comfort And Proximity To The Holy Sites In
              Makkah And Madinah.
            </p>

            <div className="flex justify-center items-center">
              <button className="bg-blue-500 text-white  py-2 px-4 rounded-2xl hover:bg-blue-600">
                More Questions Live Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>





















</>





    )
}

export default SpecialDeals