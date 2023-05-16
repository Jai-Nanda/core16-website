import Image from 'next/image'
import Link from 'next/link';
import alumData from '../data/aluminiData.json'
import hey from '../public/core _logo.png'
export default function team() {
  return (
    <div className="max-w-7xl  m-auto mt-[3%] ">
      <div className="sm:flex-row sm:flex sm:justify-center sm:items-center flex flex-col justify-center items-center">
        <Link href={"/team"} className="text-4xl font-bold  ml-[3%]">Members</Link>
        <Link href={"/alumini"} className="text-4xl font-bold text-primary-color  ml-[3%]">Alumini</Link>
      </div>
      {alumData.map(a => (
          <div
            className=''
          >
            <h1 className='text-center font-semibold text-3xl mt-16 mb-16'>
              <a>{a.year}</a>
            </h1>
            <div className='sm:flex-row flex sm:justify-between flex-col items-center  m-auto'>
            {a.members.map(member => (
              <div className='max-w-[80%] sm:max-w-full mt-10 m-auto border-t-4 border-b-4 rounded-2xl border-r-4 sm: sm:w-[500px] sm:h-60 border-[#642C15] w-[70%] h-44'>
                <div className='sm:flex sm:flex-row-reverse  sm:justify-center sm:items-center flex flex-col  relative'>
                  <img
                    className='w-[62%] sm:w-[255px] sm:h-[255px] -top-3   -left-10 rounded-full border border-[#642C15] absolute sm:-left-20 sm:-top-2'
                    src={member.avatar}
                    alt={member.name}
                  />
                  <div className='flex flex-col justify-center ml-32 mt-12 items-center'>
                    <h1 className='font-semibold text-primary-color text-lg'>
                      {member.name}
                    </h1>
                    
                    <h2
                      className='font-medium mt-1'
                    >
                      {member.post}
                    </h2>
{/* 
                     {member.whereabouts.forEach(lol => (
                      <h3 className='' style={{ fontSize: `1rem` }}>
                        {}
                      </h3>
                    ))}  */}
                    <p className=' mt-1 max-w-[250px] text-center text-sm'>
                      {member.description}
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
