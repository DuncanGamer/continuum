
import { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cart: [],
    }
 const [state, dispath] = useReducer(CartReducer, initialState)
   
    return ( 
    <CartContext.Provider value={{state, dispath}}>
        {children}
    </CartContext.Provider>
    )
   
};


export { CartProvider, CartContext}




