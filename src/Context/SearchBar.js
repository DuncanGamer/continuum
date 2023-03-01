// contexto para la barra de búsqueda

import { createContext, useState } from "react";



export const SearchBarContext = createContext();




export const SearchBarProvider = ({ children }) => {
    const [concertlist, setConcertlist] = useState("");
  
    return (
      <SearchBarContext.Provider value={{ concertlist, setConcertlist }}>
        {children}
      </SearchBarContext.Provider>
    );
  };
  

