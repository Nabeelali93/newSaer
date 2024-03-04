import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import profile from "../assets/profile.png"


function Header() {
  return (
    <div className=' p-3 border flex items-center sm:px-24 justify-between overflow-hidden'>
    <div className='flex items-center gap-2'>
      <div className='py-1.5 px-3.5 rounded-xl sm:rounded-2xl bg-[#1476D1]'>
        <h1 className='text-white text-lg font-bold'>S</h1>
      </div>
      <div>

<Link to={"/"} > <h1 className='text-[#1476D1] font-bold text-base sm:text-lg'>Saer.pk</h1></Link>
      </div>
    </div>


    <div className='flex items-center gap-2 md:gap-10'>
      <div className='flex gap-2.5 sm:gap-10'>
        <div>
          <Link to={"/helpcenter"}><h1 className='sm:text-lg text-[10px]'>Help me</h1></Link>
        </div>
        <div>
          <Link to={"/searchbooking"}><h1 className='sm:text-lg text-[10px]'>My orders</h1></Link>
        </div>
      </div>

      <div className='flex items-center gap-1 sm:gap-2'>
        <div>
          <Icon icon="lets-icons:bell-pin-light" className='sm:h-7 sm:w-7 h-6 w-6' />
        </div>


        <div >
          <img className='sm:w-8 sm:h-8 h-6 w-6 rounded-full object-cover' src={profile} alt="profile" />
        </div>
      </div>


    </div>

  </div>
  )
}

export default Header