import Head from 'next/head'
import Image from 'next/image'
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import Home_image from '../public/home_image.png'
import Link from 'next/link'
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

      <main className='flex flex-col justify-center items-center mt-[10%] sm:flex-row sm:justify-center sm:items-center  sm:max-w-7xl sm:m-auto sm:mt-[10%] sm:w-full '>
        <div className=' sm:mr-72'>
          <h1 className=' text-5xl text-center sm:text-7xl font-bold'>C.O.Я.E <span className='text-primary-color'>16</span></h1>
          <div className='flex justify-center items-center mt-4 '>
            <Link href={"https://www.facebook.com/dpsCore/"}><BsFacebook size={20} className='mx-2'/></Link>
           <Link href={"https://www.instagram.com/coreisus/"}> <BsInstagram size={20} className='mx-2'/></Link>
            <Link href={"https://www.youtube.com/channel/UCTyKR4ln9jsG-EvnZCDg_ug"}><BsYoutube size={20} className='mx-2'/></Link>
            <Link href={"https://www.linkedin.com/company/coreisus/"}><BsLinkedin size={20} className='mx-2'></BsLinkedin></Link>
          </div>
        </div>
        <div>
          <Image src={Home_image} alt='HOME IMAGE' className='sm:min-w-[620px] max-w-[80%] m-auto mt-10 '></Image>
        </div>
      </main>
        <main className='flex flex-col justify-center items-center mt-[10%] sm:flex-row sm:justify-center sm:items-center  sm:max-w-7xl sm:m-auto sm:mt-[10%] sm:w-full '>
        <div className='mt-5'>
          <h1 className='text-4xl text-center sm:text-6xl font-bold sm:text-left text-primary-color'>About Us</h1>
          <div className='mt-5 '>
           <p className='sm:max-w-[90%] sm:mt-5 max-w-[80%] m-auto mt-5 text-center sm:text-left sm:m-0'>Instituted in 2008 by the students of Delhi Public School Dwarka, COЯE was established with the aim of promoting competence and excellence in the field of computer and information technology at school, as well as various inter-school symposia. COЯE hosted its first Inter School Symposium in 2008. Since then, we have not looked back.</p>
           <p className='sm:max-w-[90%] sm:mt-5 max-w-[80%] m-auto mt-5 text-center sm:text-left sm:m-0'>
Over the years, the club has progressed phenomenally, dominating several competitions and attaining victory. We have set high standards and ensure that we not only conform to these year after year, but set the bar a few notches higher. It takes a radical attitude, love for computers and an exceptional set of skills to be a part of the club.
</p>
          </div>
        </div>
        <div>
        <iframe className='sm:mt-10  max-w-[80%] m-auto mt-10 max-h-[270px] sm:min-w-[540px] sm:min-h-[315px]' width="540" height="315" src="https://www.youtube.com/embed/5anMlH-hEzg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </div>
      </main>
      </div>
    </>
  )
}
