import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footter from './Footter'

const Rootlayout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet/>
            <Footter />
        </>
    )
}

export default Rootlayout