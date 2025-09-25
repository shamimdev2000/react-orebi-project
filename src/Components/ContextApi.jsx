import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let ApiData = createContext()

const ContextApi = ({children}) => {

    let [data, setdata] = useState([])

    let getdata = ()=>{
        axios.get("https://dummyjson.com/products").then((response)=>{

            setdata(response.data.products);
            

        })
    }
    useEffect(()=>{
        getdata()
    },[])

  return (
    <>
       <ApiData.Provider value={data}>{children}</ApiData.Provider>
    </>
  )
}

export {ContextApi , ApiData}