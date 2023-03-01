import '../App.css';
import Baner from '../components/Baner';
import Carrusel from '../components/Carrusel';

import TitleConcerts from '../components/TitleConcerts';
import Concertmaster from '../components/concertmaster';
import Market2 from '../components/Market2';




function HomePage() {



  return (
    <>
 
      <Carrusel />
      <div className=' bg-gradient-to-b from-black to-transparent'>
      <Market2 />
      
      <TitleConcerts />

      <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
   
        <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
        <Concertmaster/>
        </div>
        </div>
        </div>
      <Baner />
     
     
 
      
    
      



    </>
  );
}

export default HomePage;