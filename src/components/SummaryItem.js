import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const SummaryItem = ({ concert }) => {
  const { dispatch } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: concert });
  };

  const handleRemoveFromLocalStorage = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = cart.filter((concert) => concert._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({ type: "REMOVE_FROM_CART", payload: { _id: id } });
  };

  return (
    <>
    
      <div className=" container flex sm:mx-auto sm:flex-row gap-5 items-center justify-between py-8 border-b border-gray-300/60">
        <div className="flex  items-center  mb-4 sm:mb-0">
          <div className="rounded overflow-hidden mr-4">
            <img className="w-20 h-20 object-cover" src={concert.image.url} alt={concert.concertName} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{concert.concertName}</h3>
            <p className="text-sm text-gray-500">{concert.price}</p>
          </div>
        </div>
        <div>
          <button 
          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" 
          onClick={() => handleRemoveFromLocalStorage(concert._id)}>
            Eliminar
          </button>
        </div>
      </div>

    
    </>
  );
};

export default SummaryItem;
