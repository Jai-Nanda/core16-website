import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/core _logo.png'
import resourceData from '../data/resourceData.json'
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
    <div>
    <div className='max-w-7xl m-auto pt-[3%] ' >
        <h1 className='text-5xl font-bold text-center text-primary-color pb-[3%]'>Resources</h1>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

        {dataResource.map(data => (
          <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
         <div className="flex flex-col justify-center items-center pt-5">
              <h2 className='font-semibold text-xl text-center text-primary-color'>{data.name}</h2>
              <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {data.contact}</h2>
              <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{data.description2}</p>
              <Link href={data.link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
          </div>
      </div>
        ))}
              </div>
              <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource2.map(data => (
  <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{data.name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {data.contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{data.description2}</p>
      <Link href={data.link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource3.map(data => (
  <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{data.name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {data.contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{data.description2}</p>
      <Link href={data.link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">

{dataResource4.map(data => (
  <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{data.name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {data.contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{data.description2}</p>
      <Link href={data.link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>
      
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-evenly sm:items-center">

{dataResource5.map(data => (
  <div className='border-4 w-80 h-[300px] border-primary-color rounded-2xl mb-10' >
 <div className="flex flex-col justify-center items-center pt-5">
      <h2 className='font-semibold text-xl text-center text-primary-color'>{data.name}</h2>
      <h2 className='mt-5 font-thin text-center max-w-[250px]'><span className='font-medium'>Contact: </span> {data.contact}</h2>
      <p className='font-thin text-center text-sm max-w-[250px] mt-5 '>{data.description2}</p>
      <Link href={data.link} className='text-base text-primary-color underline font-medium mt-5 text-center'>Learn More</Link>
  </div>
</div>
))}
      </div>

    </div>
    </>
  )
}
