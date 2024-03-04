import React, { useState, useRef, Fragment, useEffect } from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Utils/hero.scss";
import Select from "react-select";
import { Icon } from "@iconify/react";
import { Dialog, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";

import Flatpickr from "react-flatpickr";

import CusSupport from "./CusSupport";
import Holidays from "./Holidays";
import DownloadApp from "./DownloadApp";
import UserCard from "./UserCard";
import Service from "./Service";
import { Link } from "react-router-dom";

function Hero() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [picker, setPicker] = useState(new Date());




  const options = [
    { value: "Karachi", label: "Karachi" },
    { value: "Lahore", label: "Lahore" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Multan", label: "Multan" },
    { value: "Pehsawar", label: "Peshawar" },
    { value: "Quetta", label: "Quetta" },
  ];

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      } 
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let [isOpen, setIsOpen] = useState(false);


  const [adultcount, setadultcount] = useState(0);

  const [childcount, setchildcount] = useState(0);
  const [infantcount, setinfantcount] = useState(0);

  // Function to increment the counter
 

  return (
    <>
      <div className="overflow-hidden  hero">
        <div className=" flex justify-center  py-4 sm:py-14 ">
          <div className=" w-[85%]  sm:px-0  md:w-[65%]">
            <h1  className="text-white font-bold py-2 text-lg">
              Your travel advisor on your click!
            </h1>
            <div className="bg-white rounded-xl ">
              <Tabs>
                <TabList  className="flex bg-[#09559B] w-full rounded-2xl">
                  <Tab
                    className={`Tab_Bar  !rounded-tr-xl !rounded-tl-xl flex   justify-center ${
                      selectedTabIndex == 0
                        ? "bg-white !text-[#09559B] rounded-tr-xl  "
                        : ""
                    }`}
                    onClick={() => setSelectedTabIndex(0)}
                  >
                    Umrah <pre className="sm:block hidden"> Packages</pre>
                  </Tab>
                  <Tab
                    className={`Tab_Bar !rounded-tr-xl !rounded-tl-xl   ${
                      selectedTabIndex === 1 ? "bg-white !text-[#09559B] rounded-tr-xl " : ""
                    }`}
                    onClick={() => setSelectedTabIndex(1)}
                  >
                    Flights
                  </Tab>
                  <Tab
                    className={`Tab_Bar !rounded-tr-xl !rounded-tl-xl  ${
                      selectedTabIndex === 2 ? "bg-white !text-[#09559B] rounded-tr-xl" : ""
                    }`}
                    onClick={() => setSelectedTabIndex(2)}
                  >
                    Hotels
                  </Tab>
                  <Tab
                    className={`Tab_Bar !rounded-tr-xl !rounded-tl-xl  ${
                      selectedTabIndex === 3 ? "bg-white !text-[#09559B] rounded-tr-xl" : ""
                    }`}
                    onClick={() => setSelectedTabIndex(3)}
                  >
                    Insurance
                  </Tab>
                  <Tab
                    className={`Tab_Bar !rounded-tr-xl !rounded-tl-xl  ${
                      selectedTabIndex === 4 ? "bg-white !text-[#09559B] rounded-tr-xl" : ""
                    }`}
                    onClick={() => setSelectedTabIndex(4)}
                  >
                    Visa
                  </Tab>
                  <Tab
                    className={`Tab_Bar !rounded-tr-lg !rounded-tl-lg ${
                      selectedTabIndex === 5 ? "bg-white !text-[#09559B] rounded-tr-xl" : ""
                    }`}
                    onClick={() => setSelectedTabIndex(5)}
                  >
                    Trips
                  </Tab>
                </TabList>

                <div className="px-4 py-2">
                  <TabPanel>
                    <div className="flex gap-5 sm:flex-row flex-col">
                      <div className="border-2 p-2 sm:w-[35%] rounded-md">
                        <p className="text-xs sm:text-base text-gray-500">
                          FROM
                        </p>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Lahore"
                          className="border-none outline-none border-transparent"
                        />
                      </div>

                      <div className="border-2 p-2 sm:w-[35%] rounded-md">
                        <div className="flex">
                          <p className="text-xs sm:text-base text-gray-500">
                            DEPART
                          </p>
                          <p className="text-xs sm:px-10  px-14 sm:text-base text-gray-500">
                            RETURN
                          </p>
                        </div>

                        <div >
                        <div >
                            <Flatpickr
                              value={picker}
                              id="multi-dates-picker"
                              color="blue"
                              className="py-1.5 outline-none  w-full"
                              placeholder="Select Date"
                              options={{
                                mode: "multiple",
                                dateFormat: "d-m-Y",
                              }}
                              onChange={(date) => {
                                if (date.length <= 2) {
                                  // sirf do dates ko allow karein
                                  setPicker(date);
                                } else {
                                  setPicker(date.slice(-2)); // agar sirf do latest dates hi chahiye, tab yeh line uncomment kar sakte hain.
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div ref={dropdownRef} className="relative sm:w-[30%]">
                      <div
  onClick={() => setIsOpen(!isOpen)}
  className="border-2 p-2  cursor-pointer rounded-md" // Change this line
>
  <p className="text-xs sm:text-base text-gray-500">PASSENGERS</p>
  <div className="mt-2 py-2 text-sm">
    {adultcount === 0
      ? "SELECT PASSENGERS"
      : `Adult:${adultcount}, Child:${childcount}, Infant:${infantcount}`}
  </div>
</div>

                        <Transition
                          show={isOpen}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <div className="px-4 py-2 flex justify-between">
                                <p>Adult</p>
                             <div className="flex items-center">
  <button
    onClick={() => {
      if (adultcount > 0)
        setadultcount(adultcount - 1);
    }}
    type="button"
    className="text-black focus:outline-none bg-gray-200 px-[8px] rounded-full"
  >
    -
  </button>
  <span className="mx-2"> {adultcount} </span>
  <button
    onClick={() =>
      setadultcount(adultcount + 1)
    }
    type="button"
    className="text-white focus:outline-none bg-[#09559B] px-[7px] rounded-full"
  >
    +
  </button>
</div>
                              </div>
                              <div className="border-b border-gray-200"></div>
                              <div className="px-4 py-2 flex justify-between">
                                <p>Child</p>
                                <div className="flex">
                                  <button
                                    onClick={() => {
                                      if (childcount > 0)
                                        setchildcount(childcount - 1);
                                    }}
                                    type="button"
                                    className="ext-black focus:outline-none bg-gray-200 px-[8px]   rounded-full"
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{childcount}</span>
                                  <button
                                    onClick={() =>
                                      setchildcount(childcount + 1)
                                    }
                                    type="button"
                                    className="text-white focus:outline-none bg-[#09559B] px-[7px]   rounded-full"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="border-b border-gray-200"></div>
                              <div className="px-4 py-2 flex justify-between">
                                <p>Infant</p>
                                <div className="flex">
                                  <button
                                    onClick={() => {
                                      if (infantcount > 0)
                                        setinfantcount(infantcount - 1);
                                    }}
                                    type="button"
                                    className="text-black focus:outline-none bg-gray-200 px-[8px]   rounded-full"
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{infantcount}</span>
                                  <button
                                    onClick={() =>
                                      setinfantcount(infantcount + 1)
                                    }
                                    type="button"
                                    className="text-white focus:outline-none bg-[#09559B] px-[7px]   rounded-full"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <button onClick={()=>setIsOpen(!isOpen)} className="bg-[#09559B] text-white rounded-md px-3 flex justify-center mx-auto" >Done</button>
                            </div>
                          </div>
                        </Transition>
                      </div>
                    </div>

                    <div className="flex justify-center items-center mt-5">

                    <Link to={"/umrahpkglist"}>
                      <div className="inline-flex px-4 sm:px-14 rounded-md py-2 gap-2 sm:gap-4 text-white bg-[#4169E1]">
                        <Icon icon="tabler:search"  className="sm:w-[24px] sm:h-[24px] "/>
                       <button className="text-[12px] sm:text-[16px]">Search</button>
                      </div>

                      </Link>


                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Coming Soon</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Coming Soon</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Coming Soon</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Coming Soon</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Coming Soon</h2>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <CusSupport />
      <Holidays />
      <DownloadApp />
      <UserCard />
      <Service />
    </>
  );
}

export default Hero;
