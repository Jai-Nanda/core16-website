import  {motion} from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import yo from '../public/exun.png'
import SliderO from './components/SliderO'
import SliderJ from './components/SliderJ'

export default function gallery() {
  
  return (
    <>
      <div className="max-w-[80%] sm:max-w-7xl m-auto">
          <h1 className='font-bold text-2xl text-center mt-20'>2022</h1>
          <div className='mt-10 max-w-3xl m-auto'>
        <SliderO />
          </div>
      </div>
      <div className="max-w-[80%] sm:max-w-7xl m-auto">
          <h1 className='font-bold text-2xl text-center mt-20'>2021</h1>
          <div className='mt-10 max-w-3xl m-auto'>
        <SliderJ />
          </div>
      </div>
    </>
  )
}
