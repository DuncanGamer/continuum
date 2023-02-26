const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (concert) => concert._id !== action.payload._id
      );
      return { ...state, cart: updatedCart };

    case "CLEAR_CART":
      return { cart: [] };
    case "SET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default CartReducer;
