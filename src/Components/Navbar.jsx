import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered, FaCartPlus, FaUser } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import cart from "../assets/cart.png"

const Navbar = () => {

    let [info, setinfo] = useState(false)
     let [info1, setinfo1] = useState(false)
     let [info2, setinfo2] = useState(false)

    let inforef = useRef()
    let inforef1 = useRef()
     let inforef2 = useRef()

    useEffect(()=>{

   document.addEventListener("click", (e)=>{

    if(inforef.current.contains(e.target)){
         setinfo(!info)
    }else{
        setinfo(false)
    }

     if(inforef1.current.contains(e.target)){
         setinfo1(!info1)
    }else{
        setinfo1(false)
    }

     if(inforef2.current.contains(e.target)){
         setinfo2(!info2)
    }else{
        setinfo2(false)
    }

   })

    },[info, info1, info2])
    


  return (
    <>
        <section className='bg-[#F5F5F3]'>
            <Container>
                    <div className="flex items-center justify-between py-4">

                        <div className="w-1/4 relative">
                            <div className="flex items-center gap-x-5 hover:opacity-100" ref={inforef}>
                                <div className="">
                                    <FaBarsStaggered className='text-[24px]'/>
                                </div>
                                <div className="">
                                    <h3 className='xl:text-[14px] sm:text-[12px] text-[#262626]'>Shop by Category</h3>
                                </div>
                            </div>

                            { info &&
                            
                            <div className="z-2 w-full bg-[#262626] py-4 px-4 absolute top-[55px] left-0">
                                <ul>
                                    <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff] hover:duration-200 hover:ease-in-out' href="#">Accesories</a></li>
                                      <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff]  hover:duration-200 hover:ease-in-out' href="#">Furniture</a></li>
                                      <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff]  hover:duration-200 hover:ease-in-out' href="#">Electronics</a></li>
                                      <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff]  hover:duration-200 hover:ease-in-out' href="#">Clothes</a></li>
                                      <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff]  hover:duration-200 hover:ease-in-out' href="#">Bags</a></li>
                                      <li className='py-2 pl-2'><a className='text-[16px] text-[#767676] py-2 px-3 pl-3 hover:pl-6
                                     hover:text-[#fff]  hover:duration-200 hover:ease-in-out' href="#">Home appliances</a></li>
                                </ul>
                            </div>
                            }


                        </div>

                        <div className="w-2/4">
                                <div className="relative">
                                    <input className=' w-full border-1 pl-4 bg-[#fff] outline-none border-[#262626] 
                                    py-3 rounded-full' type="text" placeholder='Search Products'/>

                                    <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                                        <FaSearch className='text-[24px]'/>
                                    </div>

                                </div>
                        </div>

                        <div className="w-1/4">
                            <div className="flex justify-end">

                                <div className="flex gap-x-2 relative" ref={inforef1}>
                                    <FaUser className='text-[24px]'/>
                                    <IoMdArrowDropdown className='text-[24px]'/>

                                    {info1 && 
                                    <div className="absolute z-[2] bg-[#fff] top-[55px] left-0 border-1 border-[#262626] sm:ml-[-50px]">
                                        <button className='text-[16px] text-[#262626] w-[150px] py-3 hover:bg-[#262626]
                                         hover:text-[#fff]'>My Account</button>
                                         <button className='text-[16px] text-[#262626] py-3 w-[150px] hover:bg-[#262626]
                                         hover:text-[#fff]'>Log Out</button>
                                    </div>
                                    }

                                </div>

                                <div className="px-4 relative" ref={inforef2}>
                                        <FaCartPlus className='text-[24px]'/>

                                        {info2 &&
                                        <div className="absolute z-2 top-[54px] left-0 w-[300px] ml-[-240px] border-1 border-[#262626] pb-2">
                                            <div className="flex items-center gap-x-4 py-2 px-2 bg-[#F5F5F3] justify-between">

                                                <div className="">
                                                    <img src={cart} alt="" />
                                                </div>
                                                <div className="">
                                                    <h2 className='text-[14px] text-[#262626] font-bold'>Black Smart Watch</h2>
                                                    <h1 className='text-[14px] text-[#262626] font-bold'>$44.00</h1>
                                                </div>
                                                <div className="">
                                                    <ImCross className='text-[24px] font-bold text-[#262626]'/>
                                                </div>

                                            </div>

                                            <div className="px-2 pt-4 bg-[#fff]">
                                                <h1 className='text-[16px] font-bold text-[#262626]'>Subtotal: $44.00</h1>
                                                <div className="py-2 flex gap-x-2">
                                                    <button className='w-[150px] py-3 text-[#262626] border-1 hover:bg-[#262626] hover:text-[#fff]'>View Cart</button>
                                                     <button className='w-[150px] py-3 text-[#262626] border-1
                                                      hover:bg-[#262626] hover:text-[#fff]'>Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                        }


                                </div>

                            </div>
                        </div>

                    </div>
            </Container>
        </section>
    </>
  )
}

export default Navbar