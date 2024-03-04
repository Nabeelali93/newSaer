import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import visa from "../../assets/visa.png"
import master from "../../assets/Mastercard.png"
import "../../Utils/hero.scss"
import Link from "../../assets/link.png"
import Jazzcash from "../../assets/jazzcash.png"
import easy from "../../assets/easy.png"
import hbl from "../../assets/hbl.png"
import konnect from "../../assets/konnect.png"
import lock from "../../assets/lock.png"



function Booking({onNext}) {
  return (
    <div className='m-10 '>
    <Tabs className={" "}>
      <TabList className="flex border-b  lg:flex-row flex-col border-gray-300"> {/* Border at the bottom of the tab list */}
        <Tab className="payment_Tabs w-screen ">
            <p className='font-bold text-[14px]'>Debit Credit Card </p>
            <div className='flex items-center  '>
            <img className='h-5 w-12' src={visa} alt="" />
            <img src={master} alt="" />
            </div>
            </Tab> 

            <Tab className="payment_Tabs">
            <p className='font-bold'>1 Bill_ Bank Transfer <br /> <span className='text-[#4169E1] font-normal text-xs'>Save PKR 3,214 on fees</span> </p>
            <div className='flex '>
            <img className='h-12 w-12' src={Link} alt="" />
            </div>
            </Tab> 

            <Tab className="payment_Tabs w-[700px]">
            <p className='font-bold'>Jazzcash  </p>
            <div className='flex '>
            <img className='w-16 h-8' src={Jazzcash} alt="" />
            </div>
            </Tab> 

            <Tab className="payment_Tabs">
            <p className='font-bold'>Easypaisa  </p>
            <div className='flex '>
            <img src={easy} alt="" />
            </div>
            </Tab> 


            <Tab className="payment_Tabs">
            <p className='font-bold'>HBL Direct Transfer <br /> <span className='text-[#4169E1] font-normal text-xs'>Save PKR 3,214 on fees</span> </p>
            <div className='flex gap-2 items-center '>
            <img className='w-12 h-7' src={hbl} alt="" />
            <img src={konnect} className='w-12 h-9' alt="" />            </div>
            </Tab> 










      </TabList>
 
      <TabPanel className=""> {/* Border around each tab panel */}

<div className='flex mt-5 justify-center gap-2 items-center'>
<img src={lock} className='h-5 w-5' alt="" />
<p className='text-sm text-gray-400'>All informatoin is encrypted and we do not store your card details.</p>
</div>



<div className='md:flex-row items-center justify-around flex-col flex'>

<div>
<p className="my-3">Name on card </p>
  <input type="text" placeholder="Ahsan Raza"  className="py-1.5 rounded-md px-8 md:w-64 w-full border-2" name="" id="" />
</div>


<div>
<p className="my-3">Card Number </p>
  <input type="text" placeholder="1234 5675 1235 2345"  className="py-1.5 rounded-md md:w-64 w-full px-8 border-2" name="" id="" />
</div>


<div>
<p className="my-3">Expiry </p>
  <input type="text" placeholder="MM/YY"  className="py-1.5 rounded-md md:w-36 w-full px-4 border-2" name="" id="" />
</div>

<div>
<p className="my-3">CVV </p>
  <input type="text" placeholder="123"  className="py-1.5 rounded-md md:w-36 w-full px-4 border-2" name="" id="" />
</div>



<button onClick={onNext} className="border-[#1476D1] border-2  text-[#1476D1] py-2 px-5   mt-7   rounded-md">Pay Now</button>
</div>















      </TabPanel>





      <TabPanel className="">

<div className='m-5'>

    

</div>







      </TabPanel>














    </Tabs>

    </div>
  )
}

export default Booking
