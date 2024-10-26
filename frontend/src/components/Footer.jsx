import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <hr className='mt-40' />
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap14 my-10 mt-4 text-sm'>
      <div>
        <img src={assets.logo_removebg} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit animi necessitatibus ducimus. Illo dicta omnis quaerat fugiat quas hic explicabo facilis, ab inventore fugit non excepturi quo beatae iste, animi, autem vero est tempore fuga? Voluptatem magnam tenetur, possimus ipsum natus fugit molestiae dolores laborum quod nobis dignissimos eaque.
          </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>DELIVERY</li>
        <li>PRIVACY POLICY</li>
        </ul>

      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>8695226203</li>
            <li>360eyetechnologies@gmail.com</li>
        </ul>
      </div>
    </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @ 360eyetechnologies.in - All Right Reserved</p>
        </div>

    </div>
    
  )
}

export default Footer
