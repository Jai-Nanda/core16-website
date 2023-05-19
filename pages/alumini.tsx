import Image from 'next/image'
import Link from 'next/link';
import alumData from '../data/aluminiData.json'
import hey from '../public/core _logo.png'
// To spending weeks org events all these years had been so beautifull
export default function team() {
  return (
    <div className="max-w-7xl  m-auto mt-[3%] ">
       <div className="sm:flex-row sm:flex sm:justify-center sm:items-center flex flex-col justify-center items-center">
        <Link href={"/team"} className="text-3xl font-medium  ">MEMBERS</Link>
        <Link href={"/alumini"} className=" text-3xl sm:font-bold  sm:ml-[3%] text-primary-color ">ALUMNI</Link>
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
              <div key={name} className='max-w-[60%] sm:max-w-full mt-10 m-auto sm:border-t-4 border-b-4 rounded-2xl border-r-4 sm: sm:w-[500px] sm:h-60 border-l-4 border-[#642C15] w-[70%] h-[340px] mb-20'>
                <div className='sm:flex sm:flex-row-reverse  sm:justify-center sm:items-center flex flex-col  relative '>
                  <Image
                    className=' sm:min-w-[255px]  max-w-[220px] max-h-[220px] sm:min-h-[255px] -top-20   -left-2 rounded-full border border-[#642C15] absolute sm:-left-20 sm:-top-2'
                    src={avatar}
                    alt={name}
                    width={200}
                    height={200}
                  />
                  <div className='flex flex-col justify-center sm:ml-40 sm:pt-16 mt-40 sm:mt-0  items-center'>
                    <h1 className='font-semibold text-primary-color sm:text-xl text-lg'>
                      {name}
                    </h1>
                    
                    <h2
                      className='font-medium mt-1'
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
  )
}
