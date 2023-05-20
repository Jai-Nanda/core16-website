export default function DPSMap() {
  return (
    <div
      style={{
        marginTop: `3rem`,
        overflow: `hidden`,
        background: `none !important`,
        height: `400px`,
        width: `400px`,
      }}
      className=' rounded-2xl  m-auto max-w-[100%]'
    >
      <iframe
        width="400"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=delhi%20public%20school%20dwarka&t=&z=13&ie=UTF8&iwloc=&output=embed"
        // frameBorder="0"
        scrolling="no"
        // marginheight="0"
        // marginwidth="0"
      ></iframe>
    </div>
  )
}