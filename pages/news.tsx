import Image from 'next/image'
import Link from 'next/link'
import Exun from '../public/exun.png'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'


export default async function news() {
  const query = groq`
*[_type=='post'] {
author->,
categories []->
} | order(_createdAt desc)
`
  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div className='max-w-7xl m-auto mt-[3%]'>
      <h1 className='text-5xl font-bold text-center text-primary-color mb-[3%] '>Latest News</h1>
      <div>
      <div className='w-full mb-20     h-[80vh]'style={{
      backgroundImage: `url(/news.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}>
      </div>
      </div>
      <h1 className='font-bold text-3xl mt-20'>Latest achievements</h1>
      <div className='flex justify-between items-center mt-10'>
        <div className='flex justify-center items-center flex-col ' >
          
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
      </div>
      <div className='flex justify-between items-center mt-10'>
        <div className='flex justify-center items-center flex-col ' >
          
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <Image src={Exun} alt='LOGO' className='w-96 h-56'></Image>
          <h2 className='font-medium text-xl mt-3'>EXUN 2022-2023</h2>
          <Link href={"/"} className='text-primary-color underline'>SEE MORE</Link>
        </div>
      </div>
    </div>
  )
  
}
