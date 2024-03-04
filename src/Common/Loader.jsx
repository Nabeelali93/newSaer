import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function Loader() {
  return (
<>

<div className='flex justify-center my-52 items-center'>
<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#09559B"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
</div>



</>  )
}

export default Loader