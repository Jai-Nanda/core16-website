import data from "../data/contactData.json"
import DPSMap from "./components/Map"
export default function Contact() {
  return (
    <div className="max-w-5xl m-auto mt-[3%] ">
        <h1 className="text-5xl font-bold text-primary-color mb-[3%]">
           Contact Us
        </h1>

        <div className='flex flex-col items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center' style={{}}>
          <DPSMap />
          <p className='' style={{}}>
            Reach out to us at:
            <br /> <br />
            <h4 style={{ fontWeight: `600` }}>Delhi Public School, Dwarka</h4>
            <br />
            <p style={{ fontSize: `1.1rem`, marginTop: `5px` }}>
              <mark>
                <b>Address: </b>
              </mark>{" "}
              Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi 110078
            </p>
            <p style={{ fontSize: `1.1rem`, marginTop: `10px` }}>
              <mark>
                <b>Phone: </b>
              </mark>{" "}
              011 2507 4472
            </p>
            <p style={{ fontSize: `1.1rem`, marginTop: `10px` }}>
              <mark>
                <b>Email: </b>
              </mark>{" "}
              mail@dpsdwarka.com
            </p>
            <br />
            <br />
            For any queries regarding CORE, feel free to contact any of the
            following:
          </p>
        </div>

        <div className='flex justify-between items-center border-2 border-white mt-10 mb-10'>
          {data.map(person => (
            <div className=''>
              {/*<img className={styles.image} src={member.avatar} alt={member.name} />*/}
              <div className='flex flex-col border'>
                <h1 className=''>{person.name}</h1>
                <h2 className=''>{person.post}</h2>
                <p className=''>
                  <span style={{ fontWeight: `600` }}>Phone: </span>
                  {person.phone}
                </p>
                <a className='' href={person.email}>
                  <mark>Email</mark>
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}