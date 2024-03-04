import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navigation from './Config/Navigation'
import Booking from './Components/PaymentSection/Stepper'
import PackageCard from './Components/UmrahPackageList'


function App() {

  return (
    <div style={{userSelect:"none"}}>
<Header/>
<Navigation/>
{/* <PackageCard/> */}
{/* <Booking/> */}



<Footer/>
    </div>
  )
}

export default App
