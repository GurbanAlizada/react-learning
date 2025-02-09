import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products , setProducts] = useState([])

   useEffect(  ()=> {
    const getData = async() =>{
        const data = await axios.get('https://fakestoreapi.com/products');
        setProducts(data.data)
    }
    getData()
   } , [])

   console.log(products)

  return (

    <div>Products</div>
  )

}

export default Products