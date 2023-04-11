import Head from 'next/head'
import Image from 'next/image'
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import Logo from '../public/core _logo.png'
import Home_image from '../public/home_image.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-between  max-w-7xl m-auto mt-[10%] w-full '>
        <div className=' mt-20'>
          <h1 className='text-7xl font-bold'>C.O.R.E <span className='text-primary-color'>16</span></h1>
          <div className='flex justify-center items-center mt-2'>
            <BsFacebook size={24} className='mx-2'/>
            <BsInstagram size={24} className='mx-2'/>
            <BsYoutube size={24} className='mx-2'/>
            <BsLinkedin size={24} className='mx-2'/>
          </div>
        </div>
        <div>
          <Image src={Home_image} alt='HOME IMAGE' className='max-w-2xl'></Image>
        </div>
      </main>
        <main className='flex justify-between   max-w-7xl m-auto mt-[10%] w-full '>
        <div className=''>
          <h1 className='text-6xl font-bold'>About <span className='text-primary-color'>Us</span></h1>
          <div className='  mt-4'>
           <p className='pr-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis magnam nihil numquam tempora voluptates a ex non suscipit consequuntur, doloremque corporis nesciunt? Deleniti aut minima eaque, doloribus quos illum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque explicabo culpa amet, unde molestiae nam consequuntur nihil aspernatur libero tempore quis praesentium doloribus dolorem harum aut modi ut eveniet.</p>
          </div>
        </div>
        <div>
          <Image src={Home_image} alt='HOME IMAGE' className='max-w-2xl'></Image>
        </div>
      </main>
    </>
  )
}
