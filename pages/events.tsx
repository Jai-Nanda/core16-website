import Link from 'next/link'
import eventsData from '../data/eventsData.json'
import Head from 'next/head';
export default function events() {
  const dataEvent = eventsData.filter(events =>
    events.id === "0"
    );
    const dataEvent2 = eventsData.filter(events =>
      events.id === "1"
      );

  return (
    <>
    <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='max-w-7xl m-auto '>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center " >

        {dataEvent.map(({title, date, link, desc, contact, note}) => (
          <div key={title} className='mt-[5%]  w-80 h-[300px] border-[2px] border-primary-color rounded-2xl '>
         <div className="h-full w-full " >
      <div className='flex flex-col justify-center items-center pt-5 '>
              <h2 className='font-semibold text-xl text-center text-primary-color'>{title}</h2>
              <h2 className='mt-1 text-center'>{note}</h2>
              <h4 className='mt-1 text-center font-semibold text-xs text-primary-color'>{date}</h4>
              <p className='font-light text-center text-sm max-w-[250px] mt-1 '>{desc} </p>
              <Link href={link} className='text-base text-primary-color underline font-medium mt-2 text-center'>Learn More</Link>
          </div>
          </div>
      </div>
        ))}
              </div>
              <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center sm:mt-10 sm:items-center " >

{dataEvent2.map(({title, date, link, desc, contact, note}) => (
  <div key={date} className='mt-[3%]  w-80 h-[300px] border-[2px] border-primary-color rounded-2xl '>
 <div className="h-full w-full rounded-xl">
<div className='flex flex-col justify-center items-center pt-5'>
      <h2 className='font-semibold text-2xl text-center'>{title}</h2>
      <h2 className='mt-1 text-center'>{note}</h2>
      <h4 className='mt-1 text-center font-semibold text-xs text-primary-color'>{date}</h4>
      <p className='font-light text-center text-sm max-w-[250px] mt-1 '>{desc} </p>
      <Link href={link} className='text-lg text-primary-color underline font-medium mt-2 text-center'>Learn More</Link>
  </div>
  </div>
</div>
))}
      </div>
</div>
    </>
  )
}
