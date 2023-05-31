import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/core _logo.png'
import resourceData from '../data/resourceData.json'
import Head from 'next/head';
export default function events() {
  const dataResource = resourceData.filter(events =>
    events.id === "0"
    );
    const dataResource2 = resourceData.filter(events =>
      events.id === "1"
      );
      const dataResource3 = resourceData.filter(events =>
        events.id === "2"
        );
        const dataResource4 = resourceData.filter(events =>
          events.id === "3"
          );
          const dataResource5 = resourceData.filter(events =>
            events.id === "4"
            );

  return (
    <>
    <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
    <div className='max-w-7xl m-auto pt-[3%] ' >
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

        {dataResource.map(({name, link, description2, contact}) => (
          <div key={name} className='border-[2px] w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
         <div className="flex flex-col justify-center items-center pt-5">
              <h2 className='font-semibold text-xl text-center text-primary-color'>{name}</h2>
              <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {contact}</h2>
              <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{description2}</p>
              <Link href={link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
          </div>
      </div>
        ))}
              </div>
              <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource2.map(({name, link, description2, contact}) => (
  <div key={link} className='border-[2px] w-80 min-h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{description2}</p>
      <Link href={link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource3.map(({name, link, description2, contact}) => (
  <div key={description2} className='border-[2px] w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{description2}</p>
      <Link href={link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource4.map(({name, link, description2, contact}) => (
  <div key={contact} className='border-[2px] w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{description2}</p>
      <Link href={link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      
      </div>
      <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:justify-start  sm:items-center max-w-7xl m-auto">

{dataResource5.map(({name, link, description2, contact}) => (
  <div key={""} className='border-[2px] w-80 min-h-[300px] border-primary-color rounded-2xl mb-10 ' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{description2}</p>
      <Link href={link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>

    </div>
    </>
  )
}
