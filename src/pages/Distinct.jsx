import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Destination from '../Components/Distination/Destination';
import BestDst  from '../Components/Best Destination/BestDst'
import Places from '../Components/Places Photos/Places';
import Footer from '../Components/Footer/Footer'
import Copy from '../Components/Copy write/Copy'



const Distinct = () => {
  return (
    <div>
      <Navbar/>
      <Destination/>
      <BestDst/>
     <Places/>
     <Footer/>
     <Copy/>
    </div>
  )
}

export default Distinct;
