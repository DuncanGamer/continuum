import React from "react";
import Carrusel from "../components/Carrusel";
import Baner from "../components/Baner";
import TitleConcerts from "../components/TitleConcerts";
import Concertmaster from "../components/concertmaster";
import Market2 from "../components/Market2";
import { BarcelonaCall } from "../components/functions/AxiosCalls";

const Barcelona = () => {
    const imageURL = 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
  

  return (
    <>
      <Carrusel Titulo1="Barcelona" Titulo2="City" imageURL={imageURL}/>
      <div className=" bg-gradient-to-b from-black to-transparent">
        <Market2 />

        <TitleConcerts />

        <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
          <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
            <Concertmaster Axios={BarcelonaCall} />
          </div>
        </div>
      </div>
      <Baner />
    </>
  );
};

export default Barcelona;
