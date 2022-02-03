import React from "react";
import "./CartItem.scss";

function CartItem({ id, imageUrl, name, price, quantity }) {
  return (
    <div className="cart-item" key={id}>
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="price-quantity">
          <span className="quantity">{quantity} X </span>
          <span className="price"> ${price}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
