import React from 'react'
import { PiCarProfileFill, PiNumberTwoBold } from 'react-icons/pi'
import Container from './Container'
import { IoReloadOutline } from 'react-icons/io5'
import banbot3 from "../assets/banbot3.png"
import banbot2 from "../assets/banbot2.png"
import banbot1 from "../assets/banbot1.png"

const Banbot = () => {
    
    return (
        <>
            <section>
               <Container>

                    <div className="flex justify-between">
                        <div className="py-2 items-center flex gap-x-3">
                            <PiNumberTwoBold className='text-[24px]' />
                            <h3 className='text-[16px] text-[#262626]'>Two years warranty</h3>
                        </div>
                         <div className="py-2 items-center flex gap-x-3">
                            <PiCarProfileFill className='text-[24px]' />
                            <h3 className='text-[16px] text-[#262626]'>Free shipping</h3>
                        </div>
                         <div className="py-2 items-center flex gap-x-3">
                            <IoReloadOutline className='text-[24px]' />
                            <h3 className='text-[16px] text-[#262626]'>Return policy in 30 days</h3>
                        </div>
                    </div>
                    




                    <div className="flex justify-between mt-[84px] py-2">
                        <div className="">
                            <img className='pr-4' src={banbot3} alt="" />
                        </div>
                         <div className="">
                             <div className="">
                                <img className='pl-4' src={banbot1} alt="" />
                             </div>
                              <div className="xl:mt-[30px] sm:mt-[15px]">
                                <img className='pl-4' src={banbot2} alt="" />
                              </div>
                         </div>
                    </div>

               </Container>
              
            </section>
        </>
    )
}

export default Banbot