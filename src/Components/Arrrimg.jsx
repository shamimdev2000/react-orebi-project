import React from 'react'
import Container from './Container'
import arr5 from "../assets/arr5.png"
import arr6 from "../assets/arr6.png"
import arr7 from "../assets/arr7.png"
import arr8 from "../assets/arr8.png"
import arr9 from "../assets/arr9.png"
import sp1 from "../assets/sp1.png"
import sp2 from "../assets/sp2.png"
import sp3 from "../assets/sp3.png"
import sp4 from "../assets/sp4.png"


const Arrrimg = () => {
  return (
    <>
    <section className='mt-[64px] py-2'>
            <Container>
                    <div className="flex justify-between gap-x-6 px-2">
                            <div className="">
                                <img src={arr5} alt="" />
                            </div>
                             <div className="">
                                <img src={arr6} alt="" />
                            </div>
                             <div className="">
                                <img src={arr7} alt="" />
                            </div>
                             <div className="">
                                <img src={arr8} alt="" />
                            </div>
                    </div>

                        <div className="w-full mt-[84px] py-2 px-2">
                            <img src={arr9} alt="" />
                        </div>

                        <div className="mt-[64px] py-2 px-2">
                            <div className="">
                                <h1 className='text-[39px] text-[#262626] py-4 font-bold'>Special Offers</h1>
                            </div>
                            <div className="flex justify-between gap-x-6 px-2 my-4">
                                <div className="">
                                    <img src={sp1} alt="" />
                                </div>
                                 <div className="">
                                    <img src={sp2} alt="" />
                                </div>
                                 <div className="">
                                    <img src={sp3} alt="" />
                                </div>
                                 <div className="">
                                    <img src={sp4} alt="" />
                                </div>
                            </div>
                        </div>
                    
            </Container>
    </section>
    </>
  )
}

export default Arrrimg