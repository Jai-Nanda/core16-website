import Image from 'next/image'
import Link from 'next/link'
import Exun from '../public/exun.png'
import Ts from '../public/ts.png'
import Xino from '../public/xino.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import Head from 'next/head'
import CarouselK from './components/CarouselK'
export default  function news() {
  
  return (
    <>
    <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
      <div className='max-w-7xl m-auto mt-[3%]'>

      {/* <div className='flex flex-col justify-end mb-20  rounded-2xl   h-[80vh]'style={{
      backgroundImage: `url(/news.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}>
      <h1 className='mb-10 ml-10 text-3xl font-semibold'>C.O.R.E Intras 2023 being held on xx/xx/23</h1>
      </div> */}
      <CarouselK/>
      <div>
    {/* {images.length > 0  ?   
      <>
        <div className=" ">
              <div className=" sm:w-full sm:h-[80vh] sm:overflow-hidden sm:rounded-2xl sm:mb-10 w-[80%] m-auto overflow-hidden h-60">
                  <img className={` object-cover z-20 sm:w-full sm:h-[80vh] w-full h-60`} src={images[index].name} alt="" />
                  <img className={` object-cover z-0 sm:w-full   sm:h-[80vh] w-full h-60 `} src={images[index1].name} alt="" />
              </div>
        </div>

      </>  
       : "no images yet"}
      </> */}
      </div>
      </div>

      <div className='bg-primary-color h-[1px] min-w-full mt-16'></div>
      <div className='max-w-[80%] sm:max-w-7xl m-auto flex justify-between items-center mt-20'>
      <h1 className='font-bold sm:text-3xl text-xl '>Latest Achievements</h1>
      <Link href={"/"} className='underline uppercase flex justify-center items-center text-primary-color font-medium text-sm sm:text-lg'>ARCHIVE <span className='ml-1 sm:ml-5'><BsChevronRight  size={20}/></span></Link>
      </div>
      <div className='max-w-[80%] sm:flex-row m-auto sm:max-w-7xl flex justify-center items-center flex-col sm:flex sm:justify-between sm:items-center mt-10'>
        <div className='flex justify-normal items-start flex-col ' >
          <Link href={"/newsRead"}>
          <Image src={Exun} alt='LOGO' className='max-w-[400px] max-h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in Exun 2022-2023</h2>
          </Link>
          <Link href={"/newsRead"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
       
        <div className='flex justify-normal items-start flex-col'>
          <Link href={"/newsRead3"}>
          <Image src={Xino} alt='LOGO' className='max-w-[400px] max-h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in XINO 2022</h2>
          </Link>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-normal items-start flex-col'>
          <Link href={"/newsRead2"}>
          <Image src={Exun} alt='LOGO' className='max-w-[400px] max-h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in Exun 2021-2022</h2>
          </Link>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
      </div>
    </div>
    </>
  )

  
}

