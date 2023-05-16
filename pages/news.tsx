import Image from 'next/image'
import Link from 'next/link'
import Exun from '../public/exun.png'
import Ts from '../public/ts.png'
import Xino from '../public/xino.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useState, useEffect } from 'react'
export default  function news() {
  const [index ,setIndex] = useState(0)
  const [index1 ,setIndex1] = useState(1)
  const [trans , setTrans] = useState(false)
  const [transR , setTransR] = useState(false);
  const [activeIndex , setActiveIndex] = useState(0)
   
  useEffect(() => {
    if(transR) {
      setTimeout(() => {
        setTransR(false)
      },700)
    }
    
    if(trans ) {
      setTimeout(() => {
        setTrans(false)
        setIndex((index + 1) % images.length );
        setIndex1((index1 + 1) % images.length )
      },800)
    }
  }, [trans ,transR])
  
    const images = [
                { name : 'news.png'},
                { name : 'news.png'},
                { name : 'news.png'},
    ]
  
    const handlePrev = () => {
      setTransR(true)
      setTrans(false)
         const nextIndex = index - 1 ;
         const nextIndex1 = index1 - 1 ;
  
        if(nextIndex1 < 0){
          setIndex1(images.length - 1);
        } else  {
          setIndex1(nextIndex1)
        }
    
        if(nextIndex < 0){
          setIndex(images.length - 1);
        } else  {
          setIndex(nextIndex)
        }
      
  
    }
    const handleNext = () => {
      setTrans(true)
      setTransR(false)
    }
  
  
    const handleImgClick = (idx) => {
        setActiveIndex(idx)
        if(idx === index ){
          return;
        }
        if(idx < index){
          setIndex(idx)
          setIndex1(idx + 1)
          setTransR(true)
          setTrans(false)
        } else {
          setIndex((idx-1) % images.length );
          setIndex1((idx ) % images.length )
          handleNext();
        }
    }
  
  return (
    <div className=''>
      <div className='max-w-7xl m-auto mt-[3%]'>
      {/* <div className='flex flex-col justify-end mb-20  rounded-2xl   h-[80vh]'style={{
      backgroundImage: `url(/news.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}>
      <h1 className='mb-10 ml-10 text-3xl font-semibold'>C.O.R.E Intras 2023 being held on xx/xx/23</h1>
      </div> */}
      <>
    {images.length > 0  ?   
      <>
        <div className=" ">
              <div className=" sm:w-full sm:h-[80vh] sm:overflow-hidden sm:rounded-2xl sm:mb-10 w-[80%] m-auto overflow-hidden h-60">
                  <img className={` object-cover z-20 sm:w-full sm:h-[80vh] w-full h-60`} src={images[index].name} alt="" />
                  <img className={` object-cover z-0 sm:w-full   sm:h-[80vh] w-full h-60 `} src={images[index1].name} alt="" />
              </div>
        </div>

      </>  
       : "no images yet"}
      </>
      <div className='sm:flex sm:justify-end flex justify-end  max-w-[80%] m-auto'>
        <BsChevronLeft size={24} className='cursor-pointer' onClick={handleNext}/>
        <BsChevronRight size={24} className='ml-10 cursor-pointer' onClick={handlePrev} />
      </div>
      </div>
      <div className='bg-primary-color h-[1px] min-w-full mt-16'></div>
      <div className='max-w-[80%] sm:max-w-7xl m-auto flex justify-between items-center mt-20'>
      <h1 className='font-bold sm:text-3xl text-xl '>Latest achievements</h1>
      <Link href={"/"} className='underline uppercase flex justify-center items-center text-primary-color font-medium text-sm sm:text-lg'>SEE MORE <span className='ml-1 sm:ml-5'><BsChevronRight  size={20}/></span></Link>
      </div>
      <div className='max-w-[80%] sm:flex-row m-auto sm:max-w-7xl flex justify-center items-center flex-col sm:flex sm:justify-between sm:items-center mt-10'>
        <div className='flex justify-normal items-start flex-col ' >
          
          <Image src={Exun} alt='LOGO' className='w-[400px] h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in Exun 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-normal items-start flex-col'>--+
          <Image src={Ts} alt='LOGO' className='w-[400px] h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in Robotronics 2022</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-normal items-start flex-col'>
          <Image src={Xino} alt='LOGO' className='w-[400px] h-60'></Image>
          <h2 className='font-medium text-base mt-3'>The C.O.R.E. team participated in XINO 2022</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
      </div>
    </div>
  )

  
}

