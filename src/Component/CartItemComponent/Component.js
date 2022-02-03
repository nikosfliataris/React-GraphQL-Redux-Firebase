import React from "react";
import "./Component.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decreaceItem,
  deleteItem,
} from "./../../Redux/Cart/CartAction";
function Component({ item }) {
  const { imageUrl, name, price, quantity, id } = item;
  const dispatch = useDispatch();
  const Deleteitem = (e) => {
    e.preventDefault();
    dispatch(deleteItem({ id, name, price, imageUrl }));
  };

  const increace = (e) => {
    e.preventDefault();
    dispatch(addItem({ id, name, price, imageUrl }));
  };
  const decreace = (e) => {
    e.preventDefault();
    dispatch(decreaceItem({ id, name, price, imageUrl }));
  };
  return (
    <>
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} />
        </div>
        <div className="name">{name}</div>
        <div className="price">{price}$</div>
        <div className="quantity">
          <span className="arrow" onClick={decreace}>
            &#10094;
          </span>
          {quantity}
          <span className="arrow" onClick={increace}>
            &#10095;
          </span>
        </div>
        <button className="remove-button" onClick={Deleteitem}>
          X
        </button>
      </div>
    </>
  );
}

export default Component;
