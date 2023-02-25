import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { token } from "./functions/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContex";
import { useContext } from "react";
import { useEffect } from "react";




 

function NavDesktop() {
 const { user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const handleSesion = () => {
    localStorage.removeItem("token");
    nav("/");
    setUser();
  };


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
                <a
                  href="/MyConcerts"
                 
                  className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                >
                  My concerts
                </a>
              {user.role==="admin"? (<a
                  href="https://apicontinuum.herokuapp.com/users/all-users"
                   className="bg-do-blue-mediumdark px-3 py-1 rounded text-sky-400 font-semibold"
                   >
                Admin panel
                </a>):null }
               {console.log(user)}
               
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

        <div className="  flex items-center  mx-auto py-5 w-full bg-slate-50">
          <div className=" container mx-auto flex items-center gap-x-6 ">
            <div className=" container mx-auto flex justify-between items-center gap-x-6 ">
              <div className=" hidden md:block">
                <div className=" flex justify-between  gap-x-6">
                  <div>
                    <a href="/">
                      <img src="./logo1.png" alt="logo continum" width="60px" />
                    </a>
                  </div>
                  <div className="flex ml-20 gap-4 ">
                    <a className=" hover:text-gray-600" href="/">
                      {" "}
                      Accueil
                    </a>
                    <a href="/London" className=" hover:text-gray-600">
                      London
                    </a>
                    <a href="/Barcelona" className=" hover:text-gray-600">
                      Barcelona
                    </a>
                    <a href="/Artist" className=" hover:text-gray-600">
                      Artist
                    </a>
                    <a href="/ConcertForm" className=" hover:text-gray-600">
                      Indies
                    </a>
                  </div>

                
                </div>
              </div>
              <div className="hidden items-center g md:block">
                <div className=" w-full h-14 flex justify-around gap-10">
                  {!token() ? (
                    <a
                      className=" hover:shadow-lg shadow-md shadow-gray-500/50 border w-40 text-center py-3 rounded-xl  duration-300 ease-out hover:ease-in"
                      href="/login"
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
                  <a href="/">
                    <img src="./logo1.png" alt="logo continum" width="60px" />
                  </a>
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
              <a href="/">Accueil</a>
            </li>

            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <a href="/Artist" className=" hover:text-gray-600">
                Artist
              </a>
            </li>
            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <a href="/London" className=" hover:text-gray-600">
                London
              </a>
            </li>
            <li className="items-center pl-16 pt-2 h-10  border-b-2  bg-slate-50 w-full">
              <a href="/Barcelona" className=" hover:text-gray-600">
                Barcelona
              </a>
            </li>
            <div className=" flex flex-col gap-4">
              <button className="mt-3 mx-16 hover:shadow-lg shadow-md shadow-gray-500/50 border px-5 py-3 rounded-xl  duration-300 ease-out hover:ease-in">
                <a onClick={handleSesion} className=" p-0 hover:text-gray-800">
                  Log out
                </a>
              </button>
              <button className="mb-4 mx-16 px-5 py-3 rounded-xl hover:shadow-md shadow-lg shadow-blue-800  bg-blue-700 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">
                <a href="/login">Log in</a>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavDesktop;
