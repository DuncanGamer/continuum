import React from 'react'
import { useParams } from 'react-router-dom'
import { DataEvento,unicoevento,Simagen } from '../components/functions/AxiosCalls'
import { useEffect, useState } from 'react'
import Baner from '../components/Baner'
import '../image.css'




const Concertunic = () => {



  const params = useParams()
  const [info, Setinfo] = useState([])
  const [imagen, Setimagen] = useState([])
  const [date, Setdate] = useState([])


  useEffect(() => {

    unicoevento(params.id, Setinfo)
    Simagen(params.id, Setimagen)
    DataEvento(params.id, Setdate)

  }, [])




  return (


    <>
    <div key = {info}>
      <div className="pt-16 bg-black sm:pt-36">
        <div className=" container m-auto">
          <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">



            <div className="z-1 carousel-inner  relative w-full overflow-hidden">

              <div className="carousel-item active relative float-left w-full">
                <img src={imagen} className="  block w-full" alt="Motorbike Smoke" />
                
                <div className='flex justify-center  absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent'>
                  <h3 className=' mt-auto mb-10 z-0 text-white text-7xl py-10'>{info.name}</h3>
                </div>
              </div>
    
            </div>


          </div>
      
        </div>
      </div>

      <div className='container m-auto h-96'>
        <div>
        
          <p > Locale: {info.locale}</p>
          <p > Date: {date.localDate}</p>
          <p> Time: {date.localTime}</p>
          <a href={info.url}> <p className=' underline decoration-2 '>  Buy it in ticketmaster.com</p></a>

        </div>




      </div>
      <Baner/>

</div>





    </>







  )

}

export default Concertunic