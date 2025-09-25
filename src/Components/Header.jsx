import React from 'react'
import Container from './Container'
import n1 from "../assets/n1.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <section>
            <Container>
                <div className="flex py-5 items-center">
                    <div className="">
                        <div className="sm:ml-4">
                            <img src={n1} alt="" />
                        </div>
                    </div>
                    <div className="mx-auto">
                        <ul className='flex gap-x-5'>
                            <Link to="/">
                            <li><a href="#" className='text-[16px] text-[#767676] hover:font-bold hover:text-[#262626]'>Home</a></li>
                            </Link>
                            <Link to="/product">
                            <li><a href="#" className='text-[16px] text-[#767676] hover:font-bold hover:text-[#262626]' >Shop</a></li>
                            </Link>
                            <li><a  className='text-[16px] text-[#767676] hover:font-bold hover:text-[#262626]' href="#">About</a></li>
                            <li><a  className='text-[16px] text-[#767676] hover:font-bold hover:text-[#262626]' href="#">Contacts</a></li>
                            <li><a  className='text-[16px] text-[#767676] hover:font-bold hover:text-[#262626]' href="#">Journal</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Header