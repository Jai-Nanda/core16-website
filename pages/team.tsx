import Image from 'next/image'
import memberData from '@/data/memberData.json'
import Link from 'next/link';
import Head from 'next/head';
export default function team() {
  const dataMember = memberData.filter(members => (
    members.id === "0"
  ));
  const dataMember2 = memberData.filter(members => (
    members.id === "1"
  ));
  const dataMember3 = memberData.filter(members => (
    members.id === "2"
  ));
  const dataMember4 = memberData.filter(members => (
    members.id === "3"
  ));
  return (
    <>
    <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="max-w-7xl  m-auto mt-[3%] ">
      <div className="sm:flex-row sm:flex sm:justify-center sm:items-center flex flex-col justify-center items-center">
        <Link href={"/team"} className="text-3xl font-bold text-primary-color ">MEMBERS</Link>
        <Link href={"/alumni"} className=" text-3xl sm:font-medium  sm:ml-[3%] mt-5 sm:mt-0">ALUMNI</Link>
      </div>
      <div className="sm:flex sm:justify-between sm:flex-row sm:items-center flex flex-col justify-center items-center ">
        {dataMember.map(({name, avatar, post, description, skill}) => (
          <div key={name} className="flex  flex-col justify-center items-center mt-12 ">
            <div className='w-48 h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-lg mt-2'>{name}</h2>
          <h3 className='font-medium text-primary-color '>{post}</h3>
          <h4 className=' text-center text-sm max-w-[500px] mt-1 font-extralight'>{skill}</h4>
          <p className='font-thin text-sm mt-3'>{description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="sm:flex sm:justify-between sm:flex-row sm:items-center flex flex-col justify-center items-center">
        {dataMember2.map(({name, avatar, post, description, skill}) => (
          <div key={post} className="flex  flex-col justify-center items-center mt-12 ">
            <div className='w-48 h-48 '>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full ' src={avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h2 className='font-bold text-lg mt-2'>{name}</h2>
          <h3 className='font-medium text-primary-color '>{post}</h3>
          <h4 className=' text-center text-sm max-w-[500px] mt-1 '>{skill}</h4>
          <p className='font-thin text-sm mt-3'>{description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className=" sm:flex sm:flex-row sm:justify-between sm:items-center flex flex-col justify-center items-center mt-[3%]">
        {dataMember3.map(({name, avatar, post, description, skill}) => (
          <div key={description} className="flex justify-center items-center flex-col  ">
            <div className='max-w-48 max-h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-lg mt-2'>{name}</h2>
          <h3 className='font-medium text-primary-color '>{post}</h3>
          <h4 className=' text-center text-sm max-w-[500px] mt-1 font-extralight'>{skill}</h4>
          <p className='font-thin text-sm mt-3'>{description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="sm:flex sm:flex-row sm:justify-evenly sm:items-center flex flex-col justify-center items-center ">
        {dataMember4.map(({name, avatar, post, description, skill}) => (
          <div key={skill} className="flex justify-center items-center flex-col mt-[4%]">
            <div className=''>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h2 className='font-bold text-lg mt-2'>{name}</h2>
          <h3 className='font-medium text-primary-color '>{post}</h3>
          <h4 className=' text-center text-sm max-w-[500px] mt-1 font-extralight'>{skill}</h4>
          <p className='font-thin text-sm mt-3'>{description}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}
