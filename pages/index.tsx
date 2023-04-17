import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import About from '../public/about.png'
import Home_image from '../public/home_image.png'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' '>

      <main className='flex justify-center items-center  max-w-7xl m-auto mt-[10%] w-full '>
        <div className=' mr-72'>
          <h1 className='text-7xl font-bold'>C.O.Я.E <span className='text-primary-color'>16</span></h1>
          <div className='flex justify-center items-center mt-2'>
            <BsFacebook size={24} className='mx-2'/>
            <BsInstagram size={24} className='mx-2'/>
            <BsYoutube size={24} className='mx-2'/>
            <BsLinkedin size={24} className='mx-2'/>
          </div>
        </div>
        <div>
          <Image src={Home_image} alt='HOME IMAGE' className='w-[620px] '></Image>
        </div>
      </main>
        <main className='flex justify-center  mb-[10%]  max-w-7xl m-auto mt-[10%] w-full '>
        <div className='mt-5'>
          <h1 className='text-6xl font-bold'>About <span className='text-primary-color'>Us</span></h1>
          <div className='  mt-4'>
           <p className='pr-20'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis magnam nihil numquam tempora voluptates a ex non suscipit consequuntur, doloremque corporis nesciunt? Deleniti aut minima eaque, doloribus quos illum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque explicabo culpa amet, unde molestiae nam consequuntur nihil aspernatur libero tempore quis praesentium doloribus dolorem harum aut modi ut eveniet.</p>
          </div>
        </div>
        <div>
        <Link href='https://www.youtube.com/watch?v=5anMlH-hEzg'>
        <Image src={About} alt='ABOUT IMAGE' className='max-w-xl border-transparent rounded-xl'></Image>
        </Link>  
        </div>
      </main>
      <Footer/>
      </div>
    </>
  )
}
