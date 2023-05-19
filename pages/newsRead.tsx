import Link from "next/link"
export default function NewsMore() {
  return (
    <>
    <div className="max-w-7xl m-auto">

    <h1 className='font-bold text-center text-primary-color text-2xl mt-[3%]'>The C.O.R.E. team participated in Exun 2022-2023</h1>
      <div className='max-w-[80%] m-auto mt-10'>Greetings! 
      <p className="font-medium">The C.O.Я.E. team participated in Exun 2022-23, organised by Exun Clan of Delhi Public School RK Puram (Hybrid) from 7th-13th November 2022 and emerged as the Overall Second Runners Up of the event.

The team bagged the following awards.</p>

<br/>
<ul className='list-none '>
    <li className='mt-3'><b>Sudocrypt (International Cryptic Hunt): </b>
2nd Position: Vaibhav Singh </li>
<li className='mt-3'><b>Build: Unreality: </b>
2nd Position: Anant Choudhary, Pranjal Solanki, Raghav Grove</li>
<li className='mt-3'><b>Pyramix (Cubing): </b>
2nd Position: Adarsh Bhatt</li>
<li className='mt-3'><b>Hardware</b>
 3rd Position: Ashni Ahlawat, Karmanya Bhalla, Manan, Rahul Ramdev </li>
<li className='mt-3'><b>Spacetech</b>
2nd Position: Anant Choudhary, Arnav Narang , Atharv Saxena , Partha Khurana</li>
<li className='mt-3'><b>Roboknights Biscuits V3.0</b>
3rd Position: Karmanya Bhalla, Vansh Sachdeva</li>
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
