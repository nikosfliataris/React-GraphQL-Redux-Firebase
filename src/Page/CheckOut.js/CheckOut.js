import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CheckOut.scss";
import CartItemComponent from "./../../Component/CartItemComponent/Component";
import StripeButton from "../../Component/StripeButton/StripeButton";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/FormButton/Custom-Button";

function CheckOut() {
  const Items = useSelector((state) => ({ cartItem: state.cart.cartItem }));
  console.log(Items.cartItem);
  const history = useNavigate();
  const { Total_Price } = useSelector(({ cart: { cartItem } }) => ({
    Total_Price: cartItem.reduce(
      (accumelatedPrice, cartItem) =>
        accumelatedPrice + cartItem.quantity * cartItem.price,
      0
    ),
  }));
  const handleClick = (e) => {
    e.preventDefault(history({ pathname: "/payment" }));
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Image</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>{" "}
      {Items.cartItem.map((item) => (
        <CartItemComponent item={item} key={item.id} />
      ))}
      <div className="total">Total price: {Total_Price}$</div>
      <div className="test-warning">
        *Please use the following test credit card for payments
        <br />
        4242-4242-4242-4242 Exp:01/22 - CVC:123
      </div>
      <Button onClick={handleClick}>Pay Now</Button>
    </div>
  );
}

export default CheckOut;
