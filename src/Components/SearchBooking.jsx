import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LoginSvg from "../Common/LoginSvg";
import QrCode from "../Common/QrCode";
import OtpInput from "react-otp-input";
import { Icon } from "@iconify/react";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import ReactDatePicker from "react-datepicker";


function SearchBooking() {

const nav = useNavigate()
const [phone, setPhone] = useState('');



const [selectedDay, setSelectedDay] = useState(null);
const [selectedMonth, setSelectedMonth] = useState(null);
const [selectedYear, setSelectedYear] = useState(null);




  let [isOpen2, setIsOpen2] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  let [isOpen3, setIsOpen3] = useState(false);

  let [isOpen4, setIsOpen4] = useState(false);


const [selectedOption,setSelectedOption] = useState(null)

const [dobDay, setdobDay] = useState(null);

const [dobMonth, setdobMonth] = useState(null);

const [dobYear, setdobYear] = useState(null);



const [dobDay1, setdobDay1] = useState(null);

const [dobMonth1, setdobMonth1] = useState(null);

const [dobYear1, setdobYear1] = useState(null);


// Date of Birth

const dobDayChange = (e) => {
  setdobDay(e);

};

const dobMonthChange = (e) => {
  setdobMonth(e);

};

const dobYearChange = (e) => {
  setdobYear(e);

};


///
const dobDayChange1 = (e) => {
  setdobDay1(e);

};

const dobMonthChange1 = (e) => {
  setdobMonth1(e);

};

const dobYearChange1 = (e) => {
  setdobYear1(e);

};



const options = [
    { value: "Mrs", label: "Mrs" },
    { value: "Mr", label: "Mr" },
   
  ];



  const closeModal2 =async ()=>{

  await  toast.success("Information Successfully Update",{
      autoClose:2000
    })


    setIsOpen4(false)


    
nav("/myorder")
  }

  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openModal2() {
    setIsOpen(false);
    setIsOpen2(true);
  }

  function openModal3() {
    setIsOpen3(true);
    setIsOpen2(false);
  }

  function openModal4() {
    setIsOpen3(false);
    setIsOpen4(true);
  }





  const daysOptions = [];
  for (let i = 1; i <= 31; i++) {
    daysOptions.push({ value: i, label: i.toString() });
  }

  const monthsOptions = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const yearsOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 100; i <= currentYear; i++) {
    yearsOptions.push({ value: i, label: i.toString() });
  }







  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    // Allow only numbers
    const formattedValue = value.replace(/\D/g, "");
    setPhoneNumber(formattedValue);
  };

















  const [otp, setOtp] = useState("");

  const handleOtpChange = (newOtp) => {
    // Allow only numbers
    const sanitizedOtp = newOtp.replace(/\D/g, "");
    setOtp(sanitizedOtp);
  };



  const handleInputFocus = (event) => {
    event.preventDefault(); // Prevent input focus
  };


  return (
    <div style={{userSelect:"none"}}>
      <div className="bg-gray-100 p-5 sm:p-14 lg:px-80  overflow-hidden">
        <div className="bg-white  border-2">
          <h1 className="text-center text-2xl font-semibold p-5">
            Search Your Booking
          </h1>

          <div className="sm:m-10 m-5 ">
            <p className="font-semibold">Order Id:</p>
            <input
              type="text"
              className="border-2 w-full outline-none p-2 rounded-md"
              placeholder="Example: 123456"
              id="orderId"
            />
            <p className="text-gray-500 text-xs sm:text-sm">
              Your Order ID is emailed with booking confirmation.
            </p>

            <br />
            <p className="font-semibold">Email address:</p>
            <input
              type="text"
              className="border-2 w-full outline-none p-2 rounded-md"
              placeholder="example: example@mail.com"
              id="orderId"
            />
            <p className="text-gray-500 text-xs sm:text-sm">
              The email address entered during booking.
            </p>

            <button className="border-2 text-gray-500 sm:p-2 hover:bg-gray-200 duration-300 p-1.5 px-[30px] sm:px-[50px] my-5 rounded-lg mx-auto flex justify-center ">
              Search order
            </button>
            <hr className="border" />

            <p className="text-sm text-[#1476D1] text-center py-3">
              OR login to see your orders
            </p>

            <button
              onClick={openModal}
              className="bg-[#1476D1] sm:p-3 p-1.5 px-[50px] sm:px-20 rounded-lg text-white flex justify-center mx-auto"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Login with phone Number modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
                <Icon icon="charm:cross" className="absolute top-3 right-3 cursor-pointer text-[#1476D1]" height={"22"} width={"22"}  onClick={closeModal} />  

                  <LoginSvg />
                  <p className="py-3 text-lg">Continue to your account</p>
                  <div className="">
                    <p className="my-3">Mobile Number</p>

                    <div className="border-2 mt-2 rounded w-[100%] items-center flex p-2">
                          <div className="px-2 border-r-2">
                            <p>PK+92</p>
                          </div>

                          <input
                            type="text" // Use type="tel" for telephone numbers
                            placeholder="3124567892"
                            className="outline-none  sm:px-2 px-1 md:w-48"
                            value={phoneNumber}
        onChange={handleInputChange}
  />
                        </div>

                    <button
                      onClick={openModal2}
                      className="border-2 border-[#1476D1] text-[#1476D1] p-1.5 flex justify-center mx-auto mt-5 rounded-md px-10 "
                    >
                      Login
                    </button>

                    <p className="sm:text-xs text-[9px] mt-3 text-center">
                      By continuing you are agreeing to the 
                      <Link to={"/termsconditions"} className="text-[#1476D1]">
                        Terms and Conditions
                      </Link>
                       of saer.pk.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* verify otp Modal */}
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
                <Icon icon="charm:cross" className="absolute top-3 right-3 cursor-pointer text-[#1476D1]" height={"22"} width={"22"}  onClick={closeModal} />  

                  <LoginSvg />
                  <p className="py-3 text-lg text-center">
                    Otp send on your entered numbers
                  </p>
                  <div className="">
                    <p className="my-3 ">Otp verify</p>

                    <div className="flex justify-center">
                      <OtpInput
                        value={otp}
                        
                        onChange={handleOtpChange}
                        numInputs={4}
                        //   renderSeparator={<span>-</span>}
                        renderInput={(props, index) => (
                          <input
                            type="number"
                            {...props}
                            style={{
                              width: 50,
                              height: 50,
                              margin: 10,
                              textAlign: "center",
                              border: "1px solid #ccc", // Border style
                              borderRadius: 5, // Optional: Border radius
                              // Add any other styles as needed
                            }}
                            onFocus={handleInputFocus}

                          />
                        )}
                      />
                    </div>

                    <button
                      onClick={openModal3}
                      className="border-2 border-[#1476D1] text-[#1476D1] p-1.5 flex justify-center mx-auto mt-5 rounded-md px-10 "
                    >
                      Verify
                    </button>

                    <p className="sm:text-xs text-[9px] mt-3 text-center">
                      By continuing you are agreeing to the 
                      <Link to={"/termsconditions"} className="text-[#1476D1]">
                        Terms and Conditions
                      </Link>
                       of saer.pk.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Account Verify Modal*/}
      <Transition appear show={isOpen3} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
              
                <Icon icon="charm:cross" className="absolute top-3 right-3 cursor-pointer text-[#1476D1]" height={"22"} width={"22"}  onClick={closeModal} />  

              
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold">
                      Account verified successfully{" "}
                    </p>

                    <Icon
                      icon="lets-icons:check-fill"
                      width={"22"}
                      height={"22"}
                      color="#1476D1"
                    />
                  </div>

                  <p className="py-2 text-lg ">
                    Get started – set up your account:
                  </p>
                  <p className="text-sm text-gray-400">
                    Book more efficiently, how? <br />
                    Save your info for seamless future use. <br />
                    Add extra travellers anytime.
                  </p>

                  <div className="flex justify-evenly mt-5">
                    <button
                      onClick={closeModal}
                      className="border-[#1476D1] border-2 px-10 sm:px-14 text-[#1476D1]   py-1.5 rounded-md"
                    >
                      Later
                    </button>

                    <button
                      onClick={openModal4}
                      className="bg-[#1476D1] text-white border-[#1476D1]  border-2 sm:px-14  px-10  py-1.5 rounded-md"
                    >
                      Now
                    </button>
                  </div>

                  <div className="mt-5">
                    <QrCode />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Add user information Modal*/}
      <Transition appear show={isOpen4} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="lg:w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  ">
             
                <Icon icon="charm:cross" className="absolute top-3 right-3 cursor-pointer text-[#1476D1]" height={"22"} width={"22"} onClick={closeModal} />  

             
                  <p className="text-lg font-bold">Contact Details</p>

                  <div className="sm:flex-row flex-col sm:gap-4 justify-around  flex">
                    <div>
                      <p className=" mt-2">Mobile Number</p>

                      <div className="border-2 mt-0.5 rounded-md w-[100%] items-center flex sm:p-1.5 p-1 ">
                          <div className=" px-2 border-r-2">
                            <p className="text-sm">PK+92</p>
                          </div>

                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={handleInputChange}
                            placeholder="3124567892"
                            className="outline-none placeholder:px-3 sm:px-2 px-0 w-full md:w-48"
                          />
                        </div>
                        <p className="text-gray-400 text-[14px]">e.g +923456789112  </p>

                    </div>

                    <div>
                      <p className="mt-2">Email </p>
                      <input
                        type="email"
                        className="border-2 mt-0.5  sm:p-1.5 p-1 w-full sm:w-60 placeholder:text-sm  outline-none rounded-md"
                        placeholder="example@mail.com"
                        name=""
                        id=""
                      />
                       <p className="text-gray-400 text-[14px]">e.g name@outlook.com </p>

                    </div>
                  </div>

                  <div className="flex sm:px-4 items-center mt-3 gap-2">
                    <input type="checkbox" name="" id="" />
                    <p className="text-sm">
                      I agree to receive travel related information and deals
                    </p>
                  </div>

                  <hr className="border mt-5" />

              <p className="text-base py-3 font-bold">Update Your Other Information</p>
              <div className="md:mx-12  mx-5">



<div className="flex md:justify-between md:flex-row flex-col md:items-center">
<div>

<p className="text-sm">Title</p>
  
<Select
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
    placeholder="Mr"
    isSearchable={false}
    className="border-none mt-1  outline-none   border-transparent"
  />

</div>



<div>
  <p className="text-sm">Given Name</p>

  <input type="text" placeholder="Passport given name" className="border mt-1  w-full  p-[6px] border-gray-400  outline-none rounded-md " name="" id="" />


</div>




<div>
  <p className="text-sm">Surname</p>

  <input type="text" placeholder="Passport given name" className="border mt-1  w-full p-[6px] border-gray-400  outline-none rounded-md " name="" id="" />


</div>



</div>




<div className="flex md:justify-between my-4 md:flex-row flex-col md:items-center">
<div className="">

<p className="text-sm">Date Of Birth</p>
<div className="flex w-[90%] mt-1 ">

<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobDay}
onChange={(e)=>dobDayChange(e)}
dateFormat="d"
placeholderText="Date"
className=" p-1.5 w-full  outline-none"
/>
</div>

<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobMonth}
onChange={(e)=>dobMonthChange(e)}
dateFormat="MM"
placeholderText="Month"
showMonthYearPicker
className=" p-1.5 w-full outline-none"
/>
</div>


<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobYear}
onChange={(e)=>dobYearChange(e)}
dateFormat="yyyy"
placeholderText="Year"
showYearPicker
className=" p-1.5 w-full outline-none   "
/>
</div>
</div>

</div>


<div className="sm:w-[80%] w-full">
  <p className="text-sm">Passport Number</p>

  <input type="text" onChange={handleOtpChange} placeholder="Ext001938d" className="border mt-1 w-full p-[6px] border-gray-400  outline-none rounded-md " name="" id="" />


</div>



</div>




<div className="flex  md:justify-between my-4 md:flex-row flex-col md:items-center">
<div className="">

<p className="text-sm">Passport Expiry</p>
<div className="flex w-[90%] mt-1 ">

<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobDay1}
value={dobDay1}
onChange={(e)=>dobDayChange1(e)}
dateFormat="d"
placeholderText="Date"
className=" p-1.5 w-full  outline-none"
/>
</div>

<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobMonth1}
value={dobMonth1}

onChange={(e)=>dobMonthChange1(e)}
dateFormat="MM"
placeholderText="Month"
showMonthYearPicker
className=" p-1.5 w-full outline-none"
/>
</div>


<div className="flex  w-full border-2 cursor-pointer rounded justify-around  items-center ">
<ReactDatePicker
selected={dobYear1}
value={dobYear1}

onChange={(e)=>dobYearChange1(e)}
dateFormat="yyyy"
placeholderText="Year"
showYearPicker
className=" p-1.5 w-full outline-none   "
/>
</div>
</div>

</div>








<div className="sm:w-[80%] w-full">
  <p className="text-sm">Nationality</p>

  <input type="text" onChange={handleOtpChange} placeholder="Pakistan" readOnly className="border mt-1 w-full p-[6px] border-gray-400  outline-none rounded-md " name="" id="" />


</div>



</div>

<button onClick={closeModal2} className="p-2 px-8 bg-[#1476D1] text-white rounded-md flex justify-center mx-auto mt-3">Update</button>

                            </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
<ToastContainer/>



    </div>
  );
}

export default SearchBooking;
