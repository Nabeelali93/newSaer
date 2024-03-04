import React from 'react'
import profile from "../assets/customer.png"
import { Icon } from '@iconify/react'



function CusSupport() {
    return (

        <div className=''>


            <div className='bg-[#09559B]  text-white p-2 flex items-center  gap-2.5 sm:gap-5 justify-center overflow-hidden'>


                <div className='flex items-center'>

                    <img src={profile} className='sm:h-16 sm:w-16 h-8 w-8' alt="" />

                    <p className='sm:text-base text-[7px]'>24/7 Customer Support <br /> <span className='sm:text-sm text-[5px]'>Talk with our travel Advisor</span></p>

                </div>


                <div>

                    <p className='flex items-center gap-2'>
                        <Icon icon="mingcute:phone-line" className='sm:w-5 sm:h-5 w-3 h-3' />
                        <span className='sm:text-base text-[7px]'>Call Us</span>
                    </p>

                    <p className='sm:text-base text-[7px]'>+92 300-0709017</p>

                </div>



                <div>
                    <p className='flex items-center gap-2'>
                        <Icon icon="ic:baseline-whatsapp" className='sm:w-5 sm:h-5 w-3 h-3' />
                        <span className='sm:text-base text-[7px]'>Whatsapp</span>
                    </p>

                    <p className='sm:text-base text-[7px]'>+92 300-0709017</p>

                </div>




            </div>





        </div>


    )
}

export default CusSupport