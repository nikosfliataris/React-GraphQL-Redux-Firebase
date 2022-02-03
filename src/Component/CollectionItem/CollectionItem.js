import React from "react";
import "./CollectionItem.scss";
import Button from "../FormButton/Custom-Button";
import { useDispatch } from "react-redux";
import { addItem } from "./../../Redux/Cart/CartAction";

function CollectionItem({ id, name, price, imageUrl }) {
  const dispatch = useDispatch();
  const AddToCart = (e) => {
    dispatch(addItem({ id, name, price, imageUrl }));
  };
  return (
    <div className="collection-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={AddToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default CollectionItem;
