import { CartTypes } from "./CartTypes";
import { addItemToCart, decreaceitem } from "./CartUtilities";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case CartTypes.DELETE_ITEM:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartTypes.DECREACE:
      return {
        ...state,
        cartItem: decreaceitem(state.cartItem, action.payload),
      };
    case CartTypes.EMPTY:
      return {
        ...state,
        cartItem: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
