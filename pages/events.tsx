import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/core _logo.png'
import eventsData from '../data/eventsData.json'
export default function events() {
  const dataEvent = eventsData.filter(events =>
    events.id === "0"
    );
    const dataEvent2 = eventsData.filter(events =>
      events.id === "1"
      );

  return (
    <>
    <div className='max-w-7xl m-auto mt-[3%] '>
        <h1 className='text-5xl font-bold text-center text-primary-color mb-[3%]'>Events</h1>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

        {dataEvent.map(data => (
          <div className='border-4 w-80 h-80 border-primary-color rounded-lg my-8 mx-10'>
         <div className="flex justify-center items-center flex-col">
              <h2 className='text-center mt-5 font-semibold text-2xl'>{data.title}</h2>
              <h2>{data.title}</h2>
              <h4>{data.date}</h4>
              <p className='font-thin text-center max-w-[300px] mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione veritatis quod ex? Voluptatibus soluta eos, minus aliquam et reprehenderit veniam </p>
              <Link href={data.link}></Link>
          </div>
      </div>
        ))}
              </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center sm:items-center">
      {dataEvent2.map(data => (
          <div className='border-4 w-80 h-80 border-primary-color rounded-lg my-8 mx-10'>
          <div className="flex justify-center items-center flex-col">
              <h2 className='text-center mt-5 font-semibold text-2xl'>{data.title}</h2>
              <h2>{data.title}</h2>
              <h4>{data.date}</h4>
              <p className='font-thin text-center max-w-[300px] mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione veritatis quod ex? Voluptatibus soluta eos, minus aliquam et reprehenderit veniam </p>
              <Link href={data.link}></Link>
          </div>
      </div>
        ))}
      </div>
      </div>
    </>
  )
}
