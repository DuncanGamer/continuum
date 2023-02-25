import React from 'react'
import Baner from './Baner';
import Carrusel from './Carrusel';
import Market1 from './Market1';
import Market2 from './Market2';
import TitleConcerts from './TitleConcerts';
import Concertmaster from './concertmaster';




const Appbasics = () => {
  return (
    <div>
        <Carrusel />
      <Market1
        Titulo1="Simplier."
        Titulo2="Happier."
        Titulo3=" Better concerts."
        Paragraph="Lorem ipsum dolor sit, ametconsectetur adipisicing elitPorro in iusto sit cumque quo corporis perferendis sequi deserunt nobis ecusandaedignissimos dolor facilis nemo obcaecati quaerat assumenda Maxime natus ad " />
      <Market2 />  
      <TitleConcerts />

      <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
   
        <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
        <Concertmaster/>
        </div>
        </div>
      <Baner />
     
    </div>
  )
}

export default Appbasics