import Link from "next/link"
import Head from "next/head"
export default function NewsMore() {
  return (
    <>
    <Head>
        <title>C.O.R.E Computer Obsessed Radical Enthusiast</title>
        <meta name="description" content="HAIL CORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="max-w-7xl m-auto">

    <h1 className='font-bold text-center text-primary-color text-2xl mt-[3%]'>The C.O.R.E. team participated in Xino 2022</h1>
      <div className='max-w-[80%] m-auto mt-10'>
      <p className="font-medium">Greetings! The C.O.Я.E. team participated in XINO 22, organised by Delhi Public School Rohini (Online) from 26-27th August 2022 and emerged as the Overall Runners Up of the event.</p>
<p>The team bagged the following awards.</p>
<br/>
<ul className='list-none '>
    <li className='mt-3'><b>Xquest(Cryptic Hunt): </b>
1st Position 
Bhavye Pandey, Divyansh Khurana, Vaibhav Singh, Rahul Ramdev, Taran Chadha</li>
<li className='mt-3'><b>Execute.eXe (Programming): </b>
1st Position 
Manan, Vansh Sachdeva</li>
<li className='mt-3'><b>X-86 (Hardware) : </b>
3rd Position
Karmanya Bhalla , Manan, Rahul Ramdev</li>
<li className='mt-3'><b>Xclusive (Surprise): </b>
3rd Position
Rahul Ramdev, Taran Chadha</li>
<li className='mt-3'><b>Spacetech</b>
2nd Position: Anant Choudhary, Arnav Narang , Atharv Saxena , Partha Khurana</li>
<li className='mt-3'><b>Musical Shutter(Photography): </b>
3rd Position
Taran Chadha</li>
<li className='mt-3'><b>Unity.eXe(Game Dev) :  </b>
3rd Position
Raghav Grover</li>
</ul>
<br/>
Congratulations to all the winners, HAIL C.O.Я.E.
<br/>
<p>#obsessedyet?</p>
<Link href={"/news"} className="text-primary-color font-medium text-sm mt-5  text-center">GO BACK?</Link>

</div>
</div>

    </>
  )
}
