import React from "react";
import { useParams } from "react-router-dom";
import {
  DataEvento,
  unicoevento,
  Simagen,
} from "../components/functions/AxiosCalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShareProduct from "../components/ShareProduct";
import ConcertForm from "./ConcertForm";

const Concertunic = () => {
  const params = useParams();
  const [info, Setinfo] = useState([]);
  const [imagen, Setimagen] = useState([]);
  const [date, Setdate] = useState([]);

  useEffect(() => {
    unicoevento(params.id, Setinfo);
    Simagen(params.id, Setimagen);
    DataEvento(params.id, Setdate);
  }, []);

  return (
    <>
      <div key={info}>
        <div className="pt-16 bg-black sm:pt-36">
          <div className=" container m-auto">
            <div
              id="carouselDarkVariant"
              className="carousel slide carousel-fade carousel-dark "
              data-bs-ride="carousel"
            >
              <div className="z-1 carousel-inner  relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full ">
                  <img
                   id="header"
                    src={imagen}
                    className="  md:mt-0 block w-full h-full "
                    alt="Motorbike Smoke"
                  />

                  <div className="flex justify-center  absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent">
                    <h3 id='header' className=" mt-auto mb-40 z-0 text-white ms:text-3xl md:text-6xl py-10">
                      {info.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gradient-to-b from-black to-transparent w-full h-auto h-min-screen m-auto ">
          <div className="container mx-auto text-white text-xl border-solid text-center  ">
            <p> Date: {date.localDate}</p>
            <p> Time: {date.localTime}</p>
            <p> Locale: {info.locale}</p>
            <div className=" mb-20">
              <a href={info.url}>
                <p className=" underline decoration-2 mt-10">
                  Buy it in ticketmaster.com
                </p>
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-40  ">
            <ShareProduct />
          </div>
          <div className="mx-auto mt-28">
          <Link to="/Indies/#header">
              <h2 className="text-2xl text-white text-center font-bold underline decoration-1">
                Other independent events
              </h2>
            </Link>
            <ConcertForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Concertunic;
