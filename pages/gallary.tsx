import  {motion} from 'framer-motion'
import { useRef , useState, useEffect} from 'react'
import Image from 'next/image'
import yo from '../public/exun.png'
export default function gallary() {
  return (
    <>
      <div className="h-[100vh] ml-[20%] mr-[20%] cursor-grab overflow-hidden">
      <h1 className='text-5xl text-center mt-[3%] font-bold text-primary-color '>Gallery</h1>
          <h1 className='font-bold text-2xl text-center mt-20'>2022</h1>
        <motion.div className=' mt-10 '>
        <motion.div drag="x" dragConstraints={{right: 0}} className='flex  py-10'>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image>
          <Image src={yo} alt='BHAI' className='w-44 h-32 min-w-[200px] ml-10'></Image> 
        </motion.div>
        <p className='mr-auto -mt-7 text-gray-300 ml-10'>SCROLL</p>
        </motion.div>
      </div>
    </>
  )
}
