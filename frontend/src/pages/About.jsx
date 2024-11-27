import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti officia omnis, pariatur delectus quisquam cupiditate consequuntur excepturi fugit dignissimos aspernatur provident a quae ratione ad. Architecto nulla qui asperiores commodi. Dolorem iure repudiandae voluptatum praesentium quaerat minus fugiat libero itaque ipsa voluptates accusamus, earum quibusdam officia, ea ipsum ratione optio laborum dolorum qui exercitationem explicabo? Obcaecati voluptate id rerum.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut veritatis perspiciatis ullam id! Deserunt in possimus eius molestiae obcaecati numquam odit pariatur assumenda at fuga, architecto veniam aspernatur delectus incidunt exercitationem, voluptatem, praesentium unde dolores esse! Fugiat quibusdam placeat veritatis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ullam minima quia a saepe ea, dolorem ut corrupti aliquam nemo perspiciatis dolore ipsum voluptatem asperiores ex suscipit aut quisquam explicabo sunt temporibus assumenda amet doloribus similique ab. Necessitatibus, officia reiciendis enim quos suscipit, odio quod animi assumenda architecto eos consequatur.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi libero distinctio, repellendus unde odio neque, vitae sed enim eum, consectetur officia aliquid. Impedit, omnis autem aperiam molestiae debitis porro!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi libero distinctio, repellendus unde odio neque, vitae sed enim eum, consectetur officia aliquid. Impedit, omnis autem aperiam molestiae debitis porro!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi libero distinctio, repellendus unde odio neque, vitae sed enim eum, consectetur officia aliquid. Impedit, omnis autem aperiam molestiae debitis porro!</p>
        </div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
