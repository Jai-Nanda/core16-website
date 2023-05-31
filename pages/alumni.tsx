import Image from 'next/image'
import Link from 'next/link';
import alumData from '../data/aluminiData.json'
import Head from 'next/head';
import hey from '../public/core _logo.png'
// To spending weeks org events all these years had been so beautifull
export default function team() {

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
        <Link href={"/team"} className="text-3xl font-medium  hover:text-primary-color">MEMBERS</Link>
        <Link href={"/alumni"} className=" text-3xl sm:font-bold  sm:ml-[3%] text-primary-color mt-5 sm:mt-0">ALUMNI</Link>
      </div>
      {alumData.map(a => (
          <div
            className=''
            key={""}
          >
            <h1 className='text-center font-semibold text-3xl mt-16 mb-16'>
              <a>{a.year}</a>
            </h1>
            <div className='sm:flex-row flex sm:justify-between flex-col items-center  m-auto'>
            {a.members.map(({name , avatar, post, description, }) => (
              <div key={name} className='max-w-[60%] sm:max-w-full mt-10 m-auto sm:border-t-4 border-b-4 rounded-2xl border-r-4 sm: sm:w-[500px] sm:h-60 border-l-4 dark:border-[#642C15] border-primary-color w-[70%] h-[340px] mb-20'>
                <div className='sm:flex sm:flex-row-reverse  sm:justify-center sm:items-center flex flex-col  relative '>
                  <Image
                    className=' sm:w-[255px]  w-[240px] h-[240px] sm:h-[255px] -top-24  ml-auto mr-auto -left-0 rounded-full   absolute sm:-left-20 sm:-top-3 object-cover'
                    src={avatar}
                    alt={name}
                    width={200}
                    height={200}
                  />
                  <div className='flex flex-col justify-center sm:ml-40 sm:pt-16 mt-40 sm:mt-0  items-center'>
                    <h1 className='font-semibold text-primary-color sm:text-xl text-lg text-center'>
                      {name}
                    </h1>
                    
                    <h2
                      className='font-medium sm:mt-1 text-center'
                    >
                      {post}
                    </h2>
{/* 
                     {member.whereabouts.forEach(lol => (
                      <h3 className='' style={{ fontSize: `1rem` }}>
                        {}
                      </h3>
                    ))}  */}
                    <p className=' mt-1 max-w-[220px] sm:max-w-[250px] text-center text-sm'>
                      {description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
            </div>
        ))}
    </div>
    </>
  )
}
