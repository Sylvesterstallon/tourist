import React from 'react'
import ExAbia from '../Components/ExAbia/ExAbia'
import Rectangle from '../Components/Rectangle/Rectangle'
import Tour from '../Components/Tour/Tour'
import Branches from '../Components/Branches/Branches'
import ShowCase from '../Components/ShowCase/ShowCase'
import BlueExplore from '../Components/BlueExplore/BlueExplore'
import Testimonials from '../Components/Testimonials/Testimonials'
import AbiaFooter from '../Components/AbiaFooter/AbiaFooter'
import Author from '../Components/Authors Right/Author'
// import Navbar from '../Components/Navbar/Navbar'
const ExploreAbia = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ExAbia />
      <Rectangle />
      <Tour />
      <Branches />
      <ShowCase />
      <BlueExplore/>
      <Testimonials />
      <AbiaFooter />
      <Author />
    </div>
  )
}

export default ExploreAbia
