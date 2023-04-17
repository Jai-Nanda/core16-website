import Image from 'next/image'
import memberData from '../data/memberData.json'
import Logo from '../public/core _logo.png'
export default function team() {
  const dataMember = memberData.filter(members => (
    members.id === "0"
  ));
  return (
    <div className="max-w-7xl  m-auto mt-[3%] ">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-primary-color ml-[3%]">MEMBERS</h1>
        <h1 className="text-4xl font-bold text-primary-color ml-[3%]">/</h1>
        <h1 className="text-4xl font-bold text-primary-color ml-[3%]">ALUMINI</h1>
      </div>
      <div className="flex justify-between items-center mt-10">
        {dataMember.map(data => (
          <div className="flex justify-center items-center flex-col">
          <Image className='border-4 border-primary-color rounded-full' src={data.avatar} alt='MEMBER IMAGE' width={100} height={100}></Image>
          <h2>{data.name}</h2>
          <h3>{data.post}</h3>
          <h4>Development | Programming</h4>
          <p>{data.description}</p>
        </div>
        ))}
      </div>
    </div>
  )
}
