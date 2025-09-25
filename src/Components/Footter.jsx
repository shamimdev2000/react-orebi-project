import React from 'react'
import Container from './Container'
import n1 from "../assets/n1.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footter = () => {
    return (
        <>
            <section className='mt-[20px] bg-[#F5F5F3] py-4 px-2'>
                <Container>
                    <div className="flex justify-between">

                        <div className="w-2/12">
                            <div className="my-4">
                                <h2 className='text-[16px] text-[#262626] font-bold'>MENU</h2>
                            </div>
                            <div className="">
                                <ul>
                                    <Link to="/">
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Home</a></li>
                                    </Link>
                                    <Link to="/product">
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Shop</a></li>
                                    </Link>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">About</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Contact</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Journal</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-2/12">
                            <div className="my-4">
                                <h2 className='text-[16px] text-[#262626] font-bold'>SHOP</h2>
                            </div>
                            <div className="">
                                <ul>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Category 1</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Category 2</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Category 3</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Category 4</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Category 5</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-2/12">
                                <div className="my-4">
                                <h2 className='text-[16px] text-[#262626] font-bold'>HELP</h2>
                            </div>
                            <div className="">
                                <ul>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Privacy Policy</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Terms & Conditions</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Special E-shop</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Shipping</a></li>
                                    <li className='py-2'><a className='text-[14px] text-[#6D6D6D]
                                     font-medium hover:text-[#262626]' href="#">Secure Payments</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-3/12">
                            <div className="">
                                <div className="my-4">
                                    <h2 className='text-[16px] text-[#262626] font-bold'>(052) 611-5711</h2>
                                </div>
                                   
                                   <div className="">
                                         <h2 className='text-[16px] text-[#262626] font-bold'>company@domain.com</h2>
                                         <p className='text-[14px] cursor-pointer text-[#6D6D6D] hover:text-[#262626] py-2'>575 Crescent Ave. Quakertown, PA 18951</p>
                                   </div>

                            </div>
                        </div>

                        <div className="w-3/12">
                            <div className="my-4">
                                <img className='h-[29px] w-[122px]' src={n1} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-4 mt-[30px]">
                        <div className="flex gap-x-4 items-center">
                            <FaFacebookF className='text-[24px] text-[#262626]' />
                            <FaLinkedinIn className='text-[24px] text-[#262626]'/>
                            <FaInstagram className='text-[24px] text-[#262626]'/>
                        </div>
                        <div className="">
                            <h2 className='text-[14px] text-[#6D6D6D] hover:text-[#262626] py-2 cursor-pointer'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Footter