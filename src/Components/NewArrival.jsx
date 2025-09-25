import React, { useContext } from 'react'
import Container from './Container'
import sp1 from "../assets/sp1.png"
import Slider from 'react-slick'
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-[15px] translate-y-[-50%] z-[2]"

      onClick={onClick}
    >
      <MdNavigateNext className="bg-[#262626] text-[#fff] h-[40px] w-[40px] text-center leading-[40px] rounded-full" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-[15px] translate-y-[-50%] z-[2]"


      onClick={onClick}

    >
      <GrFormPrevious className="bg-[#262626] text-[#ffff] h-[40px] w-[40px] text-center leading-[40px] rounded-full" />
    </div>
  );
}


const NewArrival = () => {

  let ami = useContext(ApiData)

  console.log(ami);


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };




  return (
    <>
      <section className='mt-[54px] py-2'>
        <Container>

          <div className="my-4">
            <h1 className='text-[39px] text-[#262626] py-4 font-bold'>New Arrivals</h1>
          </div>


          <div className="">

          <Slider {...settings}>



            {ami.map((item) => (

              <div className=''>

                <Link to="/product">
                <img className='w-[300px]' src={item.thumbnail} alt="" />
                </Link>

                <div className="flex gap-x-2">
                  <h2>{item.title}</h2>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}


          </Slider>

          </div>

        </Container>
      </section>
    </>
  )
}

export default NewArrival