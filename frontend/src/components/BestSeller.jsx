import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSellers] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSellers(bestProduct.slice(0,5));
    },[])

  return (
    <div className='my-5'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, delectus.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>
      
    </div>
  )
}

export default BestSeller
