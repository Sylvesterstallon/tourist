import React from 'react'
import './Branches.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Ever from '../../assets/projects/Rectangle 2499 (1).png'
import Garden  from '../../assets/projects/Rectangle 2516 (1).png'
import Rixos  from '../../assets/projects/Rectangle 2514 (1).png'
import Vatican  from '../../assets/projects/Rectangle 2515 (1).png'

const Branches = () => {
  return (
    <div className='branches-main-container'>
                    <div className='branches-container'>
                        <h1>Hotels</h1>   
                        <p>Best Hotels that you can find comfort and it very affordable</p>             
                        <button className='branches-button'>Explore <FaArrowRightLong className="icon" /></button>
                        <div className='branches-img-container'>
                          <div className='branches-image1-container'>
                            <img src={Ever} alt="ever-green" />
                            <div className='ever-green-contents'>
                            <h4>Evergreen Hotel</h4>
                            <p>4.8 Rate <span>Umuahia</span></p>
                            </div>
                           <div className='button-contents'>
                            <button className='button1'>Bar</button>
                            <button className='button2'>Gym</button>
                            <button className='button3'>Resturant</button>
                            <button className='button4'>Luxury</button>
                           </div>
                          </div>
                          <div className='branches-image2-container'>
                            <img src={Garden} alt="trace-garden" />
                            <div className='ever-green-contents'>
                            <h4>Trace Garden Hotel & Suites</h4>
                            <p>4.8 Rate <span>Umuahia</span></p>
                            </div>
                           
                           <div className='button-contents'>
                            <button className='button5'>Security</button>
                            <button className='button6'>Air Condition </button>
                            <button className='button7'>Pool</button>
                            <button className='button8'>Luxury</button>
                           </div>
                          </div>
                          <div className='branches-image3-container'>
                            <img src={Rixos} alt="Rixos-hotel" />
                            <div className='ever-green-contents'>
                            <h4>Rixos Continental Hotel</h4>
                            <p>4.8 Rate <span>Umuahia</span></p>
                            </div>
                            
                           <div className='button-contents'>
                            <button className='button9'>Wifi</button>
                            <button className='button10'>Bar</button>
                            <button className='button11'>Pool</button>
                            <button className='button12'>Luxury</button>
                           </div>
                          </div>
                          <div className='branches-image4-container'>
                            <img src={Vatican} alt="vatican-hotel" />
                            <div className='ever-green-contents'>
                            <h4>Vatican City Hotel & Suites</h4>
                            <p>5 Rate <span>Aba</span></p>
                            </div>
                           
                           <div className='button-contents'>
                            <button className='button13'>Security</button>
                            <button className='button14'>Pool</button>
                            <button className='button15'>Wifi</button>
                            <button className='button16'>Luxury</button>
                           </div>
                          </div>

                        </div>
                    </div>
      
    </div>
  )
}

export default Branches
