import React from 'react'
import { useNavigate } from 'react-router-dom'

export const products = [

    {
        id : 1 ,
        name : "Acer Aspire 3" ,
        price : 999
    } ,
    {
        id : 2 ,
        name : "ASUS Tuf Gaming 5" ,
        price : 1299
    } ,
    {
        id  : 3 ,
        name : "MSI G356" ,
        price : 1355
    } ,
    {
        id : 4 ,
        name : "Acer Aspire 3" ,
        price : 999
    } ,
    {
        id : 5 ,
        name : "ASUS Tuf Gaming 5" ,
        price : 1299
    } ,
    {
        id  : 6 ,
        name : "MSI G356" ,
        price : 1355
    }

]


const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        {
        products.map( (dt , i) => (

            <div key={i} onClick={()=> navigate(`details/${dt.id}`)} >{dt.name}</div>

        ))
        }
    </div>
  )
}

export default Home