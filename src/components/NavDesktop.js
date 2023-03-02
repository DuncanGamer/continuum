import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { token } from "./functions/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContex";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { CartContext } from "../Context/CartContext";
import Dropdown from "./FindeBar";

function NavDesktop() {
  const { user, setUser } = useContext(UserContext);
  const { state, dispatch } = useContext(CartContext);
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const handleSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    nav("/");
    setUser();
  };
  const prevCartRef = useRef(state.cart);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      dispatch({ type: "SET_CART", payload: cart });
    }
    setIsCartLoaded(true);
  }, [dispatch]);

  // useEffect(() => {
  //   // Obtener el carrito del Local Storage si existe
  //   const storedCart = JSON.parse(localStorage.getItem("cart"));

  //   // Combinar los productos del carrito actual con los del Local Storage
  //   const combinedCart = storedCart
  //     ? state.cart.concat(storedCart.filter((item) => !state.cart.find((i) => i.id === item.id)))
  //     : state.cart;

  //   // Guardar el carrito combinado en el Local Storage si ha cambiado desde la última vez
  //   if (prevCartRef.current !== combinedCart) {
  //     localStorage.setItem("cart", JSON.stringify(combinedCart));
  //     prevCartRef.current = combinedCart;
  //   }

  //   // Actualizar el estado del carrito con el carrito combinado
  //   dispatch({ type: "SET_CART", payload: combinedCart });
  // }, []);

  return (
    <>
      <div className="   shadow-md w-full fixed z-10 ">
        {!token() ? null : (
          <div className=" lg:block bg-slate-800 text-gray-300 py-2 text-sm">
            <div className=" container  mx-auto flex justify-between">
              <div className="flex items-center"></div>
              <div className="flex gap-x-4 items-center">
                <Link
                  to="/NewConcert"
                  className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                >
                  Create new concert
                </Link>
                <Link
                  to="/MyConcerts"
                  className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                >
                  My concerts
                </Link>
                {user.role === "admin" ? (
                  <a
                    href="https://apicontinuum.herokuapp.com/users/all-users"
                    className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                  >
                    Admin panel
                  </a>
                ) : null}
                {console.log(user)}
                <Link
                  to="/Cart"
                  className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                >
                  Cart ({state.cart.length})
                </Link>

                <a
                  onClick={handleSesion}
                  className=" cursor-pointer bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                >
                  Log out
                </a>
              </div>
            </div>{" "}
          </div>
        )}

        <div className="  flex items-center  mx-auto py-5 w-full h-16 bg-slate-50">
          <div className=" container mx-auto flex items-center gap-x-6 ">
            <div className=" container mx-auto flex justify-between items-center gap-x-6 ">
              <div className=" hidden md:block">
                <div className=" flex justify-between items-center gap-x-6">
                  <div>
                    <Link to="/">
                      <img
                        src="https://res.cloudinary.com/dyedjxddl/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1677581045/concerts/logo1_v8oq50.png"
                        alt="logo continum"
                        width="60px"
                      />
                    </Link>
                  </div>
                  <div className="flex ml-20 gap-4 ">
                    <Link to="/#header" className=" hover:text-gray-600">
                      Accueil
                    </Link>

                    <Link to="/Indies/#header" className=" hover:text-gray-600">
                      Indies
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden  g md:block">
                <div className=" w-full h-14 flex justify-around items-center gap-10">
                  <div>
                    <Dropdown />
                  </div>

                  {!token() ? (
                    <a
                      href="/login"
                      className=" hover:shadow-lg shadow-md shadow-gray-500/50 border w-40 text-center py-3 rounded-xl  duration-300 ease-out hover:ease-in"
                    >
                      Log In
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className=" px-4 ">
              <div
                className=" md:hidden container mx-auto flex justify-between items-center gap-x-6 "
                onClick={handleClick}
              >
                <div>
                  {" "}
                  <Link to="/">
                    <img src="./logo1.png" alt="logo continum" width="60px" />
                  </Link>
                </div>

                <div>
                  {" "}
                  {isOpen ? (
                    <HiOutlineX className="h-6 w-6 " />
                  ) : (
                    <FaAlignJustify className="h-6 w-6 " />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container bg-white ">
          <ul
            className={!isOpen ? "hidden" : "absolute   bg-white w-full h-78  "}
          >
            <li className="shadow-lg items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <Link to="/">Accueil</Link>
            </li>

            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <Link to="/Artist" className=" hover:text-gray-600">
                Artist
              </Link>
            </li>
            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <Link to="/London" className=" hover:text-gray-600">
                London
              </Link>
            </li>
            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <Link to="/Barcelona" className=" hover:text-gray-600">
                Barcelona
              </Link>
            </li>
            <div className=" flex flex-col gap-4">
              <button className="mt-3 mx-16 hover:shadow-lg shadow-md shadow-gray-500/50 border px-5 py-3 rounded-xl  duration-300 ease-out hover:ease-in">
                <a onClick={handleSesion} className=" p-0 hover:text-gray-800">
                  Log out
                </a>
              </button>
              <button className="mb-4 mx-16 px-5 py-3 rounded-xl hover:shadow-md shadow-lg shadow-blue-800  bg-blue-700 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">
                <Link to="/login">Log in</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavDesktop;
