import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../Components/Container'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IoGridSharp } from 'react-icons/io5'
import { BiListUl } from 'react-icons/bi'
import { FaThList } from 'react-icons/fa'
import { ApiData } from '../Components/ContextApi'
import Post from '../Components/Post'
import Pagination from '../Components/Pagination'


const Product = () => {

    let data = useContext(ApiData)

    let [cateshow, setcateshow] = useState(false)
    let cateshowRef = useRef()

    document.addEventListener("click", (e) => {

        if (cateshowRef.current.contains(e.target)) {

            setcateshow(!cateshow)
        } else {
            setcateshow(false)
        }


    })


    let [perpage, setperpage] = useState(6)
    let [currentpage, setcurrentpage] = useState(1)
    let lastpage = perpage * currentpage
    let firstpage = lastpage - perpage


    let [ccategory, setccategory] = useState([])
    let [brand, setbrand] = useState([])

    let [filtercate, setfiltercate] = useState([])
    let [listitem, setlistitem] = useState([])

    let allpage = data.slice(firstpage, lastpage)


    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / perpage); i++) {

        pageNumber.push(i)

    }
    // console.log(pageNumber);

    let paginate = (index) => {
        setcurrentpage(index + 1)
    }

    let prev = () => {

        if (currentpage > 1) {
            setcurrentpage((state) => state - 1)
        }


    }

    let next = () => {
        if (currentpage < pageNumber.length) {
            setcurrentpage((state) => state + 1)
        }
    }

    let handlechangperpage = (e) => {
        setperpage(e.target.value);

    }

    useEffect(() => {
        setccategory([...new Set(data.map((item) => item.category))])
         setbrand([...new Set(data.map((item) => item.brand))])
       
    }, [data])


    let handlecategory = (citem) => {
        let Filtercate = data.filter((item) => item.category == citem)
        setfiltercate(Filtercate)
    }

    let handleBrand = (bitem)=>{
        let Filterbrand = data.filter((item)=>item.brand == bitem)
        setfiltercate(Filterbrand)
    
    console.log(Filterbrand);
    
    
    
       
    }
    


    let handleallproduct = () => {
        setfiltercate("")
    }


    let handlelistitem = () => {
        setlistitem("active")
    }





    return (
        <>
            <section>
                <Container>

                    <div className="mt-[64px]">
                        <h1 className='text-[49px] text-[#262626] my-4 font-bold'>Products</h1>
                        <div className="flex gap-x-3 items-center">
                            <Link to="/">
                                <h2>Home</h2>
                            </Link>
                            <IoIosArrowForward />
                            <Link to="/product">
                                <h2>Product</h2>
                            </Link>
                        </div>
                    </div>


                    <div className="flex mt-[64px]">

                        <div className="w-1/4">

                            <div className="">


                                <div className="">
                                    <h2 className='text-[20px] text-[#262626] font-bold'>Shop by Category</h2>
                                </div>

                                <div className="">
                                    <ul>
                                        <li onClick={handleallproduct} className='py-2 mt-2'><a href="#">All Product</a></li>
                                        {ccategory.map((item) => (

                                            <li onClick={() => handlecategory(item)} className='py-2 mt-2'><a href="#">{item}</a></li>
                                        ))}

                                    </ul>
                                </div>

                            </div>



                            <div className="mt-2">


                                <div className="">
                                    <h2 className='text-[20px] text-[#262626] font-bold'>Brand</h2>
                                </div>

                                <div className="">
                                    <ul>
                                       
                                        {brand.map((item) => (

                                            <li onClick={() =>handleBrand(item)} className='py-2 mt-2'><a href="#">{item}</a></li>
                                        ))}

                                    </ul>
                                </div>

                            </div>


                        </div>

                        <div className="w-3/4">

                            <div className="flex justify-between">


                                <div className=" flex gap-x-4">
                                    <div className={`p-2 ${listitem == 'active' ? 'bg-[""]' : 'bg-[red]'}`} onClick={() => setlistitem("")}>
                                        <IoGridSharp className='text-[30px]' />
                                    </div>
                                    <div className={`p-2 ${listitem == "active" ? 'bg-[red]' : 'bg-[""]'}`} onClick={handlelistitem}>
                                        <FaThList className='text-[30px]' />
                                    </div>
                                </div>

                                <div className="flex gap-x-4">


                                    <div className="flex relative">



                                        <div className="flex items-center gap-x-2" ref={cateshowRef}>
                                            <h2 className='text-[20px] text-[#262626] font-bold'>Shop by Category :</h2>
                                            <div className="border-2 py-1 px-4 text-center">
                                                <h2>Category</h2>
                                            </div>
                                        </div>

                                        {cateshow &&
                                            <div className=" absolute top-[40px] left-[66%] bg-[#fff] text-[black] font-bold py-2 px-2  border-1">

                                                <ul>

                                                    {ccategory.map((item) => (

                                                        <li onClick={() => handlecategory(item)} className='py-2 mt-2 text-center'><a href="#">{item}</a></li>
                                                    ))}

                                                </ul>
                                            </div>
                                        }


                                    </div>

                                    <div className="flex justify-end items-center">
                                        <div className="">
                                            <h2 className='text-[20px] text-[#262626] font-bold'>Show:</h2>
                                        </div>

                                        <div className="">
                                            <label htmlFor="">
                                                <select onChange={handlechangperpage} className='border-1 pl-[38%] ml-2 outline-none w-[100px] py-1' name="" id="">
                                                    <option value="6">6</option>
                                                    <option value="10">10</option>
                                                    <option value="1">1</option>
                                                    <option value="22">22</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <Post allpage={allpage} filtercate={filtercate} listitem={listitem} />

                            <Pagination pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} prev={prev} next={next} filtercate={filtercate} />



                        </div>

                    </div>

                </Container>
            </section>
        </>
    )
}

export default Product