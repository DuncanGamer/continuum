import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import Baner from "../components/Baner";
import { PostContext } from "../Context/concertsContext";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getConcertIndieRequest,
  getConcertIndieRequestImage,
} from "../components/functions/AxiosCalls";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useRedux } from "react";
import ConcertForm from "./ConcertForm";
import ShareProduct from "../components/ShareProduct";

const Concertunicindie = () => {
  useEffect(() => {
    getConcertIndieRequest(params.id, setConcert);
    getConcertIndieRequestImage(params.id, setImage);
  }, []);

  const params = useParams();

  const { state, dispatch } = useContext(CartContext);

  const [concert, setConcert] = useState([]);
  const [image, setImage] = useState([]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemInCart = cartItems.find((item) => item.id === concert.id);

    if (itemInCart) {
      const newCartItems = cartItems.map((item) =>
        item.id === concert.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    } else {
      const newCartItem = { ...concert, quantity: 1 };
      localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...concert,
        quantity: itemInCart ? itemInCart.quantity + 1 : 1,
      },
    });

    // Actualizar el valor del local storage al final de la función
    const updatedCartItems = JSON.stringify(cartItems);
    localStorage.setItem("cart", updatedCartItems);
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: concert,
    });
  };
  return (
    <>
      <div key={concert.id}>
        <div className="pt-16 bg-black sm:pt-36">
          <div className=" container m-auto">
            <div
              id="carouselDarkVariant"
              className="carousel slide carousel-fade carousel-dark "
              data-bs-ride="carousel"
            >
              <div className="z-1 carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src={image.url}
                    className="block w-full"
                    alt="Motorbike Smoke"
                  />

                  <div className="flex justify-center  absolute top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent">
                    <h3 className=" mt-auto mb-20 z-0 text-white ms:text-3xl md:text-6xl py-10">
                      {concert.concertName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gradient-to-b from-black to-transparent w-full h-auto h-min-screen m-auto ">
          <div className="container mx-auto text-white text-xl border-solid text-center  ">
            <p> Artist: {concert.artist}</p>
            <p> Date: {concert.date}</p>
            <p> Place: {concert.place}</p>
            <p> Locale: {concert.locale}</p>
            <p>Description: {concert.description}</p>
            <p> Price: {concert.price}</p>
            <div className=" mb-20 mt-20">
              <button
                onClick={() => addToCart()}
                className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
              >
                Add to cart
              </button>
            </div>
            <div className="flex justify-center mb-40  ">
              <ShareProduct />
            </div>
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

export default Concertunicindie;
