import Link from 'next/link'
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
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center " >

        {dataEvent.map(data => (
          <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl '>
         <div className="h-full w-full rounded-2xl" style={{
      backgroundImage: `url(/veli.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      
    }}>
      <div className='flex flex-col justify-center items-center pt-5'>
              <h2 className='font-semibold text-xl text-center'>{data.title}</h2>
              <h2 className='mt-1 text-center'>{data.note}</h2>
              <h4 className='mt-1 text-center font-semibold text-xs text-primary-color'>{data.date}</h4>
              <p className='font-thin text-center text-sm max-w-[250px] mt-1 '>{data.desc} </p>
              <Link href={data.link} className='text-base text-primary-color underline font-medium mt-2 text-center'>Learn More</Link>
          </div>
          </div>
      </div>
        ))}
              </div>
              <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center sm:mt-10 sm:items-center " >

{dataEvent2.map(data => (
  <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl '>
 <div className="h-full w-full rounded-xl" style={{
backgroundImage: `url(/veli.png)`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'

}}>
<div className='flex flex-col justify-center items-center pt-5'>
      <h2 className='font-semibold text-2xl text-center'>{data.title}</h2>
      <h2 className='mt-1 text-center'>{data.note}</h2>
      <h4 className='mt-1 text-center font-semibold text-xs text-primary-color'>{data.date}</h4>
      <p className='font-thin text-center text-sm max-w-[250px] mt-1 '>{data.desc} </p>
      <Link href={data.link} className='text-lg text-primary-color underline font-medium mt-2 text-center'>Learn More</Link>
  </div>
  </div>
</div>
))}
      </div>
</div>
    </>
  )
}
