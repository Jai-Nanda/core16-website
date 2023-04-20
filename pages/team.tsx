import Image from 'next/image'
import memberData from '@/data/memberData.json'
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
        <h1 className="text-4xl font-bold text-primary-color ml-[3%]">MEMBERS</h1>
        <h1 className="text-4xl font-bold  ml-[3%]">ALUMINI</h1>
      </div>
      <div className="flex justify-between  mt-10">
        {dataMember.map(data => (
          <div className="flex justify-center items-center flex-col max-w-xl ">
            <div className='w-48 h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
          <h2>{data.name}</h2>
          <h3>{data.post}</h3>
          <h4>{data.skill}</h4>
          <p>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-between mt-10 ">
        {dataMember2.map(data => (
          <div className="flex  flex-col justify-center items-center ml-16">
            <div className='w-48 h-48 '>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full ' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
          <h2>{data.name}</h2>
          <h3>{data.post}</h3>
          <h4>{data.skill}</h4>
          <p>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-10">
        {dataMember3.map(data => (
          <div className="flex justify-center items-center flex-col  ml-16">
            <div className='w-48 h-48'>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
          <h2>{data.name}</h2>
          <h3>{data.post}</h3>
          <h4>{data.skill}</h4>
          <p>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <div className="flex justify-evenly items-center mt-10">
        {dataMember4.map(data => (
          <div className="flex justify-center items-center flex-col ">
            <div className=''>
          <Image className='w-48 h-48 border-4 object-cover border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
          <h2>{data.name}</h2>
          <h3>{data.post}</h3>
          <h4>{data.skill}</h4>
          <p>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
