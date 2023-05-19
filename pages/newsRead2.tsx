import Link from "next/link"
export default function NewsMore() {
  return (
    <>
    <div className="max-w-7xl m-auto">

    <h1 className='font-bold text-center text-primary-color text-2xl mt-[3%]'>The C.O.Я.E. team participated in Exun 2021-22</h1>
      <div className='max-w-[80%] m-auto mt-10'>Greetings! 
      <p className="font-medium">Greetings! 

The C.O.Я.E. team participated in Exun 2021-22, organised by Exun Clan of Delhi Public School RK Puram (Online) from 14th-21st January 2022 and emerged as the Overall Runners Up of the event.</p>
<p>The team bagged the following awards.</p>
<br/>
<ul className='list-none '>
    <li className='mt-3'><b>Sudocrypt (International Cryptic Hunt): </b>
    2nd Position: Hitarth Khurana </li>
<li className='mt-3'><b>Designathon: </b>
2nd Position: Inesh Tickoo, Gaurika Agarwal, Kartikay Sharma</li>
<li className='mt-3'><b>Group Discussion: </b>
2nd Position: Mehardeep Kaur</li>
<li className='mt-3'><b>Open Quiz: </b>
1st Position: Tarush Sonakya, Tejas Anand </li>
<li className='mt-3'><b>Domain Square+ (Gaming): </b>
1st Position: Rahul Ramdev </li>
<li>2nd Position: Taran Chadha (Independent)</li>
<li className='mt-3'><b>Hardware: </b>
2nd Position: Tarush Sonakya, Tejas Anand, Neel Lodha, Karmanya Bhalla, Rahul Ramdev</li>
<li><b>Junior Girls in Tech: </b>
1st Position: Ashni Ahlawat 
<li>2nd Position: Vidhi Thakur</li>
<li><b>Spacetech: </b>2nd Position: Manan, Ayaan Choudhury, Anant Choudhary, Atharv Saxena 
</li>
<li><b>Locus: </b>2nd Position: COЯE</li>
</li>
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
