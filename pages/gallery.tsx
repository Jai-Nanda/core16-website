import  {motion} from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import yo from '../public/exun.png'
import SliderJ from './components/SliderJ'
import SliderO from './components/SliderO';
import Head from 'next/head'
export default function gallery() {
  
  return (
    <>
      <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[80%] sm:max-w-7xl m-auto">
      </div>
      <div className="max-w-[80%] sm:min-w-7xl m-auto">
         
          <h1 className='font-bold text-2xl text-center mt-20'>2022</h1>
          <div className='mt-10 max-w-7xl m-auto'>
        <SliderJ />
          </div>
          <h1 className='font-bold text-2xl text-center mt-20'>2021</h1>
          <div className='mt-10 max-w-7xl m-auto'>
        <SliderO />
          </div>
      </div>
    </>
  )
}
