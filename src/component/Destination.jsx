import React from 'react'
import Bali from '../assets/Bali.jpg'
import Bali1 from '../assets/Bali1.jpg'
import Bpp from '../assets/Bpp.jpg'
import Bpp1 from '../assets/Bpp2.jpg'
import Smd from '../assets/Smd.jpg'

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-2'>On the Indonesian's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Bali} alt="/" />
            <img className='w-full h-full object-cover' src={Bali1} alt="/" />
            <img className='w-full h-full object-cover' src={Bpp} alt="/" />
            <img className='w-full h-full object-cover' src={Bpp1} alt="/" />
            <img className='w-full h-full object-cover' src={Smd} alt="/" />
        </div>
    </div>
  )
}

export default Destination