import React, { useEffect, useState } from 'react'
import Container from './Container'

const Post = ({ allpage, filtercate, listitem }) => {

    let [filtercatesshow, setfiltercatesshow] = useState([])

    useEffect(() => {
        let filcate = filtercate.slice(0, 5)
        setfiltercatesshow(filcate)
    }, [filtercate])

    let [show, setshow] = useState(true)

    let handleshowall = () => {
        setfiltercatesshow(filtercate)
        setshow(false)
    }

    let handlenomore = ()=>{
         let filcate = filtercate.slice(0, 5)
        setfiltercatesshow(filcate)
         setshow(true)
    }

    return (
        <section>
            <Container>
                <div className="">

                    {filtercatesshow.length > 0 ?
                        <div className="">
                            <div className="flex justify-between flex-wrap mt-4">

                                {filtercatesshow.map((item) => (
                                    <div className="w-[32%] bg-[purple] mt-3">
                                        <img src={item.thumbnail} alt="" />

                                        <div className="bg-[transparent] hover:bg-[red]">
                                            <div className="flex justify-between">
                                                <h2 className='text-[#fff] py-2 pl-1'>{item.title}</h2>
                                                <p className='text-[#fff] py-2 pr-1 font-bold'>${item.price}</p>
                                            </div>
                                            <div className="">
                                                <h1 className='text-[#fff] py-2 pl-1'>{item.id}</h1>
                                            </div>
                                        </div>

                                    </div>

                                ))}
                            </div>

                            <div className="">
                                {filtercate.length > 5 ?

                                    show && <h2 className='py-2 hover:bg-[purple] hover:text-[#fff] w-[100px] my-2' onClick={handleshowall}>Show All...</h2>
                                    : filtercate.length > 5 && <h2 className='py-2 hover:bg-[purple] hover:text-[#fff] w-[100px] my-2' onClick={handlenomore}>No More...</h2>
                                }
                            </div>


                        </div> :




                        <div className={`justify-between ${listitem == "active" ? 'w-full' : 'w-full flex flex-wrap'}`}>

                            {allpage.map((item) => (
                                <div className="w-[32%] bg-[purple] mt-3">
                                    <img src={item.thumbnail} alt="" />

                                    <div className="bg-[transparent] hover:bg-[red]">
                                        <div className="flex justify-between">
                                            <h2 className='text-[#fff] py-2 pl-1'>{item.title}</h2>
                                            <p className='text-[#fff] py-2 pr-1 font-bold'>${item.price}</p>
                                        </div>
                                        <div className="">
                                            <h1 className='text-[#fff] py-2 pl-1'>{item.id}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }




                </div>
            </Container>
        </section>
    )
}

export default Post