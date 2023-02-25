




// import { createContext } from 'react';
// import { useState } from 'react';



// const CartContext = createContext();


// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [quantity, setQuantity] = useState(0);
//     const [showCart, setShowCart] = useState(false);
    
//     const addToCart = (product) => {
//         const item = cart.find((item) => item.id === product.id);
//         if (item) {
//         item.quantity += product.quantity;
//         setCart([...cart]);
//         } else {
//         setCart([...cart, product]);
//         }
//         setQuantity(quantity + product.quantity);
//         setTotal(total + product.price * product.quantity);
//     };
    
//     const removeFromCart = (product) => {
//         const item = cart.find((item) => item.id === product.id);
//         if (item.quantity === 1) {
//         const newCart = cart.filter((item) => item.id !== product.id);
//         setCart(newCart);
//         } else {
//         item.quantity -= 1;
//         setCart([...cart]);
//         }
//         setQuantity(quantity - 1);
//         setTotal(total - product.price);
//     };
    
//     const clearCart = () => {
//         setCart([]);
//         setQuantity(0);
//         setTotal(0);
//     };
    
//     const toggleCart = () => {
//         setShowCart(!showCart);
//     };
    
//     const contextValue = {
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         toggleCart,
//         showCart,
//         total,
//         quantity,
//     };
    
//     return (
//         <CartContext.Provider value={contextValue}>
//         {children}
//         </CartContext.Provider>
//     );
//     }

// export { CartContext, CartProvider };
