import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
  CART_CLEAR_ITEM,
} from "../constants/cartConstants";

// cartReducer state is an object with cartItem as one of many key.
export const cartReducer = (
  state = { cartItems: [], shipping: {}, payment: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // if item already exists in the cart list.
      const currentProductObj = state.cartItems.find(
        (x) => x.productId === item.productId
      );

      // product is already in the list. so replace old product obj with new payload value. and return rest cartItems list as it is.
      if (currentProductObj) {
        //always return newly create state
        return {
          cartItems: state.cartItems.map((p) =>
            p.productId === item.productId ? item : p
          ),
        };
      }
      // product is not already in cart List, so just append it to the current state.
      return {
        cartItems: [...state.cartItems, item],
      };

    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (product) => product.productId !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };
    case CART_CLEAR_ITEM:
      return {
        cartItems: [],
        shipping: {},
        payment: {},
      };
    default:
      return state;
  }
};
