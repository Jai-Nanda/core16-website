import Image from 'next/image'
import Exun from '../public/exun.png'
import newsData from '../data/newsData.json'
export default function news() {
  return (
    <div className='max-w-7xl m-auto mt-[3%]'>
      <h1 className='text-5xl font-bold text-center text-primary-color mb-[3%]'>Latest News</h1>
      <div>
        <h1>CORE INTRAS</h1>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center flex-col'>
          <Image src={Exun} alt='LOGO' className='w-60 h-36'></Image>
          <h2>EXUN 2022-2023</h2>
        </div>
        <div>
          <Image src={Exun} alt='LOGO' className='w-60 h-36'></Image>
          <h2>EXUN 2022-2023</h2>
        </div>
        <div>
          <Image src={Exun} alt='LOGO' className='w-60 h-36'></Image>
          <h2>EXUN 2022-2023</h2>
        </div>
        <div>
          <Image src={Exun} alt='LOGO' className='w-60 h-36'></Image>
          <h2>EXUN 2022-2023</h2>
        </div>
      </div>
    </div>
  )
}
