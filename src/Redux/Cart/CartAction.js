import { CartTypes } from "./CartTypes";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = ({ id, name, price, imageUrl }) => ({
  type: CartTypes.ADD_ITEM,
  payload: { id, name, price, imageUrl },
});

export const deleteItem = ({ id, name, price, imageUrl }) => ({
  type: CartTypes.DELETE_ITEM,
  payload: { id, name, price, imageUrl },
});

export const decreaceItem = ({ id, name, price, imageUrl }) => ({
  type: CartTypes.DECREACE,
  payload: { id, name, price, imageUrl },
});

export const emptyCart = () => ({
  type: CartTypes.EMPTY,
});
