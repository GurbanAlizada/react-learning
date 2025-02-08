import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../pages/Home'


const Details = () => {

    const [data , setData] = useState({})
    const {id} = useParams()
    console.log(id , "PARAMS")



    useEffect(() => {
        console.log(id , "PARAMS")
        if(id){
            setData(products.find(dt => dt.id == id) || {} )
        }
           
    } , [id])

    console.log(data , "DATA")


  return (
    <div>
        {
        data.id ? 
        (
        <>
         <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.price}</div>
         </>
         ) 
         : 
        <p>Loading....</p>
        }


       


    </div>
  )
}

export default Details