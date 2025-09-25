import React from 'react'
import ban1 from "../assets/ban1.png"
import tow from "../assets/tow.jpg"
import three from "../assets/three.jpg"
import Slider from 'react-slick'




  

const Banner = () => {

     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
            position:"absolute",
            top: "50%",
            left:"8%",
            transform:"translateY(-50%)",
          borderRadius: "10px",
          padding: "0px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
            maxHeight:"40px",
          width: "30px",
          padding:"10px 0",
          color: "transparent",
          borderRight: "1px #262626 solid"
        }}
      >
        {i + 1}
      </div>
    )
}

  return (
    <>
        <section className='outline-none'>
           
                <Slider {... settings}>

                <div>
                    <img className='xl:h-[600px] sm:h-[400px]  w-full border-0' src={ban1} alt="" />
                </div>
                 <div>
                    <img className='xl:h-[600px] sm:h-[400px]  w-full border-0' src={tow} alt="" />
                </div>
                 <div>
                    <img className='xl:h-[600px] sm:h-[400px]  w-full border-0' src={ban1} alt="" />
                </div>
                 <div>
                    <img className='xl:h-[600px] sm:h-[400px]  w-full border-0' src={three} alt="" />
                </div>
                  
                </Slider>


          
        </section>



    </>
  )
}

export default Banner