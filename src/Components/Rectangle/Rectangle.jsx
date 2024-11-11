import React from 'react'
import './Rectangle.css'
import arrow from '../../assets/projects/arrow-down.png'
import calender from '../../assets/projects/calendar-2.png'
import search from "../../assets/projects/search-status.png";

const Rectangle = () => {
  return (
    <div className='rectangle-contanier'>
                  <div className='rectangle-content'>
                    <div className='content1'>
                                        <span>You want to go</span>
                                        <p>City, destination <img src={arrow} alt="dropdown-button" className='arrow1'/></p>
                    </div>
                    <div className='content2'>
                                        <span>Departure from</span>
                                        <p>Select city <img src={arrow} alt="dropdown-button" className='arrow-down'/>  </p>
                    </div>
                    <div className='content3'>
                                        <span>Departure date</span>
                                        <p>Select date <img src={calender} alt="calender-icon" className='calender'/>  </p>
                    </div>
                    <button className='button'>
                         <img src={search} alt="" className='S-icon'/> Tim Kiem
                    </button>
                  </div>
      
    </div>
  )
}

export default Rectangle
