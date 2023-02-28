


import SummaryItem from "../components/SummaryItem";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import PayPalPayment from "../components/PayPalPayment";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [concerts, setConcerts] = useState([]);
  
  const prevCartRef = useRef(state.cart);
  


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      dispatch({ type: "SET_CART", payload: cart });
    }
    setIsCartLoaded(true);
  }, [dispatch]);
  


  useEffect(() => {
    // Obtener el carrito del Local Storage si existe
    const storedCart = JSON.parse(localStorage.getItem("cart"));

    // Combinar los productos del carrito actual con los del Local Storage
    const combinedCart = storedCart
      ? state.cart.concat(storedCart.filter((item) => !state.cart.find((i) => i.id === item.id)))
      : state.cart;

    // Guardar el carrito combinado en el Local Storage si ha cambiado desde la última vez
    if (prevCartRef.current !== combinedCart) {
      localStorage.setItem("cart", JSON.stringify(combinedCart));
      prevCartRef.current = combinedCart;
    }

    // Actualizar el estado del carrito con el carrito combinado
    dispatch({ type: "SET_CART", payload: combinedCart });
  }, []);

  

  let value = 0;
  state.cart.forEach((concert) => (value += concert.price));

  return (
    <div className="    mx-auto min-h-screen h-auto">
      <div className="  flex  gap-8  mb-16">
        <section className='sm:px-4 md:container mx-auto pt-10  mt-40 '>
          <h1 className="text-3xl font-bold mb-8">Cart</h1>
          {state?.cart?.length > 0 ? (
            <div className="mx-auto ">
              <div className=" container   mb-2  border-t border-gray-300/60">
                {state.cart.map((concert) => (
                 <SummaryItem key={concert._id} concert={concert} />


                ))}
              </div>
              <button className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out " >crear orden</button>
            </div>
          ) : (
            <>
              <p className=" mb-2">Your cart is empty</p>
              <Link to="/" className=" bg-gradient">
                <button className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ">Continue Shopping </button>
              </Link>
       
            </>
          )}
          <div className="container flex justify-end">
       <div class="  w-10 mt-40 mr-40  ">
  <PayPalPayment/>
</div>
</div>
        </section>
        
      </div>
    </div>
  );
};

export default Cart;
