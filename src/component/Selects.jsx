import React from 'react'
import Bali from '../assets/Bali.jpg'
import Bali1 from '../assets/Bali1.jpg'
import Bpp from '../assets/Bpp.jpg'
import Bpp1 from '../assets/Bpp2.jpg'
import Smd from '../assets/Smd.jpg'
import Lombok from '../assets/Lombok.jpg'
import SelectsCards from './SelectsCards'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCards bgImg={Bali} textImg='Bali'/>
        <SelectsCards bgImg={Bali1} textImg='Lombok'/>
        <SelectsCards bgImg={Bpp} textImg='Balikpapan'/>
        <SelectsCards bgImg={Bpp1} textImg='Nusa Tenggara Timur'/>
        <SelectsCards bgImg={Smd} textImg='Yogyakarta'/>
        <SelectsCards bgImg={Lombok} textImg='Manado'/>
    </div>
  )
}

export default Selects