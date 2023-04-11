import Link from 'next/link'
import eventsData from '../data/eventsData.json'
export default function events() {
  return (
    <>
    <div className='max-w-7xl m-auto mt-[3%] '>
        <h1 className='text-5xl font-bold text-primary-color mb-[3%]'>Events</h1>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center">
        {eventsData.map(events => (
              <div className='border-2 w-80 h-80 border-primary-color rounded-lg my-8 mx-10'>
              <div className="text-white">
                  <h2>{events.title}</h2>
              </div>
          </div>
        )
            )}
      </div>
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-center sm:items-center">
        <div className='border-2 w-80 h-80 border-primary-color rounded-lg my-8'></div>
      </div>
      </div>
    </>
  )
}
