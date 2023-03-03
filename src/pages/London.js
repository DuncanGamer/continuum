import React from "react";

import { LondonCall } from "../components/functions/AxiosCalls";
import Carrusel from "../components/Carrusel";
import Baner from "../components/Baner";
import TitleConcerts from "../components/TitleConcerts";
import Concertmaster from "../components/concertmaster";
import Market2 from "../components/Market2";

const London = () => {
  const imageURL =
  "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";

  return (
    <>
      <Carrusel Titulo1="London" Titulo2="City" imageURL={imageURL} />
      <div className=" bg-gradient-to-b from-black to-transparent">
        <Market2 />

        <TitleConcerts />

        <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
          <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
            <Concertmaster Axios={LondonCall} />
          </div>
        </div>
      </div>
      <Baner />
    </>
  );
};

export default London;
