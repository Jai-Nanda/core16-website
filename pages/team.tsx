import Image from 'next/image'
import memberData from '@/data/memberData.json'
import Link from 'next/link';
export default function team() {
  const dataMember = memberData.filter(members => (
    members.id === "0"
  ));
  const dataMember2 = memberData.filter(members => (
    members.id === "1"
  ));
  const dataMember3 = memberData.filter(members => (
    members.id === "2"
  ));
  const dataMember4 = memberData.filter(members => (
    members.id === "3"
  ));
  return (
    <div className="max-w-7xl  m-auto mt-[3%] ">
      <div className="flex justify-center items-center">
        <Link href={"/team"} className="text-4xl font-bold text-primary-color ">Members</Link>
        <Link href={"/alumini"} className="text-4xl font-bold  ml-[3%] ">Alumini</Link>
      </div>
      <div className="flex justify-between items-center mt-12">
        {dataMember.map(data => (
          <div className="flex justify-center items-center flex-col ">
            <div className='w-48 h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center'>
          <h2 className='font-bold text-lg mt-2'>{data.name}</h2>
          <h3 className='font-medium text-primary-color '>{data.post}</h3>
          <h4 className=' text-center max-w-[200px] mt-1'>{data.skill}</h4>
          <p className='font-medium mt-1'>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-between ">
        {dataMember2.map(data => (
          <div className="flex  flex-col justify-center items-center mt-12 ">
            <div className='w-48 h-48 '>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full ' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h2 className='font-bold text-lg mt-2'>{data.name}</h2>
          <h3 className='font-medium text-primary-color '>{data.post}</h3>
          <h4 className=' text-center max-w-[200px] mt-1'>{data.skill}</h4>
          <p className='font-medium mt-1'>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-12">
        {dataMember3.map(data => (
          <div className="flex justify-center items-center flex-col  ">
            <div className='max-w-48 max-h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-lg mt-2'>{data.name}</h2>
          <h3 className='font-medium text-primary-color '>{data.post}</h3>
          <h4 className=' text-center max-w-[200px] mt-1'>{data.skill}</h4>
          <p className='font-medium mt-1'>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-evenly items-center mt-12">
        {dataMember4.map(data => (
          <div className="flex justify-center items-center flex-col ">
            <div className=''>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center '>
            <h2 className='font-bold text-lg mt-2'>{data.name}</h2>
          <h3 className='font-medium text-primary-color '>{data.post}</h3>
          <h4 className=' text-center max-w-[200px] mt-1'>{data.skill}</h4>
          <p className='font-medium mt-1'>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
