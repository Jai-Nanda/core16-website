import Head from 'next/head'
import Image from 'next/image'
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
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
      <div className=' '>

      <main className='flex justify-center items-center  max-w-7xl m-auto mt-[10%] w-full '>
        <div className=' mr-72'>
          <h1 className='text-7xl font-bold'>C.O.Я.E <span className='text-primary-color'>16</span></h1>
          <div className='flex justify-center items-center mt-4 '>
            <BsFacebook size={20} className='mx-2'/>
            <BsInstagram size={20} className='mx-2'/>
            <BsYoutube size={20} className='mx-2'/>
            <BsLinkedin size={20} className='mx-2'/>
          </div>
        </div>
        <div>
          <Image src={Home_image} alt='HOME IMAGE' className='w-[620px] '></Image>
        </div>
      </main>
        <main className='flex justify-center   max-w-7xl m-auto mt-[10%] w-full '>
        <div className='mt-5'>
          <h1 className='text-6xl font-bold'>About <span className='text-primary-color'>Us</span></h1>
          <div className='  mt-4'>
           <p className='pr-20'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis magnam nihil numquam tempora voluptates a ex non suscipit consequuntur, doloremque corporis nesciunt? Deleniti aut minima eaque, doloribus quos illum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque explicabo culpa amet, unde molestiae nam consequuntur nihil aspernatur libero tempore quis praesentium doloribus dolorem harum aut modi ut eveniet.</p>
          </div>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5anMlH-hEzg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </div>
      </main>
      </div>
    </>
  )
}
