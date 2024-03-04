import { Icon } from "@iconify/react";
import React,{useCallback,useState} from "react";
import {useDropzone} from 'react-dropzone'
import { PhoneInput } from 'react-international-phone';

function Payment({onNext}) {


  const onDrop = useCallback(acceptedFiles => {
console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const [phone, setPhone] = useState('');








  return (
    <div className="sm:m-10 lg:px-48 md:px-32 sm:px-24 px-5 ">
      <div className="">
        <h1 className="text-2xl text-gray-500 font-semibold ">
          Contact Details
        </h1>

        <div className="border-2 mt-4 p-5 rounded-lg  ">
        <div className="lg:flex-row flex-col  justify-evenly  flex">
                    <div>
                      <p className=" mt-2">Mobile Number</p>

                      <div className="border-2  mt-0.5 rounded-md w-[100%] items-center flex sm:p-1.5 p-1 ">
                          <div className=" px-2 border-r-2">
                            <p className="text-sm">PK+92</p>
                          </div>

                          <input
                            type="tel"
                            // value={phoneNumber}
                            // onChange={handleInputChange}
                            placeholder="3124567892"
                            className="outline-none placeholder:px-3 sm:px-2 px-0 w-full md:w-48"
                          />
                        </div>
                        <p className="text-gray-400 text-[14px]">e.g +923456789112  </p>

                    </div>

                    <div className="  lg:w-64 ">
                      <p className="mt-2">Email </p>
                      <input
                        type="email"
                        className="border-2 mt-0.5  sm:p-1.5 p-1 w-[100%]  placeholder:text-sm  outline-none rounded-md"
                        placeholder="example@mail.com"
                        name=""
                        id=""
                      />
                       <p className="text-gray-400 text-[14px]">e.g name@outlook.com </p>

                    </div>
                  </div>

          <div className="flex  items-center  md:justify-center justify-start gap-2 mt-5">
            <input type="checkbox" name="" id="" />
            <p className="text-gray-400 text-sm">I agree to receive travel related information and deals</p>
          </div>






        </div>






        <h1 className="text-2xl text-gray-500 mt-4 font-semibold ">
        Travel Details for adult 1
        </h1>
<div className="border-2 p-14 mt-4 rounded-lg">
<div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <Icon className="text-center mx-auto" height={"22"} width={"22"} icon="ic:baseline-plus" />
      }
    </div>
<p className="text-center ">Upload Passport Scan First Page Image </p>
<p className="text-center "> jpg or pdf</p>


</div>



<button onClick={()=>onNext()} className="bg-[#1476D1] text-white p-4 rounded-lg mt-3 float-right my-5 px-10">Create Booking</button>










        <div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
