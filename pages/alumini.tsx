import Image from 'next/image'
import Link from 'next/link';
import alumData from '../data/aluminiData.json'
import hey from '../public/core _logo.png'
export default function team() {
  return (
    <div className="max-w-7xl  m-auto mt-[3%] ">
      <div className="flex justify-center items-center">
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
            <div className='flex justify-between items-center'>
            {a.members.map(member => (
              <div className='border-t-2 border-b-2 rounded-lg border-r-2  w-[500px] h-60 border-primary-color '>
                <div className='flex flex-col  justify-center items-center   relative'>
                  <img
                    className=' w-[255px] h-[255px] rounded-full border border-primary-color absolute -left-20 -top-2'
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
