import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import Baner from "../components/Baner";
import { PostContext } from "../Context/concertsContext";
import { useEffect } from "react";
import { useContext } from "react";
import {  useParams } from "react-router-dom";
import { getConcertIndieRequest, getConcertIndieRequestImage } from "../components/functions/AxiosCalls";
import { useState } from "react";



const Concertunicindie = () => {
  
  
    
  const params = useParams()
  
  const [concert, setConcert] = useState([]);
  const [image, setImage] = useState([]);
  
  
  useEffect(() => {
getConcertIndieRequest (params.id, setConcert)
getConcertIndieRequestImage (params.id, setImage)
    

  }, [])

 

  return (
    <>
 
 <div key = {concert.id}>
      <div className="pt-16 bg-black sm:pt-36">
        <div className=" container m-auto">
          <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">



            <div className="carousel-inner relative w-full overflow-hidden">

              <div className="carousel-item active relative float-left w-full">
                <img src={image.url} className="block w-full" alt="Motorbike Smoke" />

              </div>

            </div>


          </div>
        </div>
      </div>

      <div className='container m-auto h-96'>
        <div>
          <h3 className='text-6xl py-10'>{concert.concertName}</h3>
          <p > Artist: {concert.artist}</p>
          <p > Date: {concert.date}</p>
          <p> Place: {concert.place}</p>
            <p> Locale: {concert.locale}</p>
            <p>Description: {concert.description}</p>
            <p> Price: {concert.price}</p>
         <button className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ">Add to cart</button>
         <button className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out " > Remove from cart</button>

        </div>




      </div>
      <Baner/>

</div>
    </>
  );
};

export default Concertunicindie;