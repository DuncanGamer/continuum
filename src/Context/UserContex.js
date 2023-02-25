import axios from "axios";
import { createContext } from "react";
import { useEffect, useState } from "react";

const UserContext = createContext();
const api = "https://apicontinuum.herokuapp.com/"
// "http://localhost:3000/"
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  
  if (token) {
    setLoading(true);
    axios
      .get(`${api}users/one-users/${userId}`)
      .then((res) => {
        setUser(res.data.users[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }
}, []);


 

  return (
    <UserContext.Provider value={{ user,loading,error, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

     
    
