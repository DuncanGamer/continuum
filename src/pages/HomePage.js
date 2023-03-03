import '../App.css';
import Baner from '../components/Baner';
import Carrusel from '../components/Carrusel';

import TitleConcerts from '../components/TitleConcerts';
import Concertmaster from '../components/concertmaster';
import Market2 from '../components/Market2';
import { AxiosCalls } from '../components/functions/AxiosCalls';




function HomePage() {

  const imageURL = 'https://images.unsplash.com/photo-1587052579105-c957b0497535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd1aXRhciUyMHBsYXllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60';

  return (
    <>
 
      <Carrusel
      imageURL={imageURL}
      Titulo1= "Simplier."
      Titulo2= "Faster."
      Titulo3= "Better."
      
      
      />
      <div className=' bg-gradient-to-b from-black to-transparent'>
      <Market2 />
      
      <TitleConcerts />

      <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
   
        <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
        <Concertmaster
        Axios= {AxiosCalls}
        />
        </div>
        </div>
        </div>
      <Baner />
     
     
 
      
    
      



    </>
  );
}

export default HomePage;