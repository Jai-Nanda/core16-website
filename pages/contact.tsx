import contactData from "../data/contactData.json"
import DPSMap from "./components/Map"
export default function Contact() {
  const dataContact = contactData.filter(contact =>
    contact.id === "0"
    );
    const dataContact2 = contactData.filter(contact =>
      contact.id === "1"
      );
  return (
    <>
    <div className="max-w-5xl m-auto mt-[3%] ">
        <h1 className="text-5xl font-bold text-primary-color mb-[3%]">
           Contact Us
        </h1>
        <div className='flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center ' >
          <DPSMap />
          <p className='text-lg max-w-lg'>
            Reach out to us at:
            <h4 >Delhi Public School, Dwarka</h4>
            <br />
            <p style={{ fontSize: `1.1rem`, marginTop: `5px` }}>
                <b className="text-primary-color">Address: </b>
              Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi 110078
            </p>
            <p style={{ fontSize: `1.1rem`, marginTop: `10px` }}>
                <b className="text-primary-color">Phone: </b>
              011 2507 4472
            </p>
            <p style={{ fontSize: `1.1rem`, marginTop: `10px` }}>
                <b className="text-primary-color">School email: </b>
              mail@dpsdwarka.com
            </p>
            <p style={{ fontSize: `1.1rem`, marginTop: `10px` }}>
                <b className="text-primary-color">Club email: </b>
              mail@dpsdwarka.com
            </p>
            <br />
            For any queries regarding CORE, feel free to contact any of the
            following:
          </p>
        </div>

        </div>

        <div className="max-w-7xl m-auto mt-[3%] ">
        <div className='flex justify-evenly items-center mt-10 mb-10 '>
          {dataContact.map(person => (
            <div className=''>
              {/*<img className={styles.image} src={member.avatar} alt={member.name} />*/}
              <div className='flex flex-col justify-center items-center border-2 border-primary-color rounded-lg w-80 h-44'>
                <h1 className='pb-1 text-lg font-semibold'>{person.name}</h1>
                <h2 className='text-primary-color pb-1 font-medium'>{person.post}</h2>
                <p className='pb-1'>
                  <span className="">Phone: </span>
                  {person.phone}
                </p>
                <a className='text-primary-color underline' href={person.email}>
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center mt-10 mb-10 '>
          {dataContact2.map(person => (
            <div className=''>
              {/*<img className={styles.image} src={member.avatar} alt={member.name} />*/}
              <div className='flex flex-col justify-center items-center border-2 border-primary-color rounded-lg w-72 h-44'>
                <h1 className='pb-1 text-lg font-semibold'>{person.name}</h1>
                <h2 className='text-primary-color pb-1 font-medium'>{person.post}</h2>
                <p className='pb-1'>
                  <span className="">Phone: </span>
                  {person.phone}
                </p>
                <a className='text-primary-color underline' href={person.email}>
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        </>
  )
}