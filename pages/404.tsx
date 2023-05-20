import Image from "next/image"
import nice from '../public/404image.png'
import Link from "next/link"
import Head from "next/head"
export default function custom404() {
  return (
    <>
    <Head>
    <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
    <meta name="description" content="HAIL CORE" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className='flex justify-start items-center flex-col h-[100vh] w-full'>
    <Image className="mt-20 w-[500px] dark:from-black	" src={nice} alt="bhai"></Image>
    <h1 className="sm:font-semibold sm:text-3xl text-2xl text-center">This page was not found.</h1>
    <h1 className="font-medium text-xl mt-5 text-center">Maybe you wanna go back <Link className="text-primary-color " href={"/"}>home?</Link></h1>
</div>
</>
  )
}