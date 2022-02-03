import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StripeCheckOutButton from "react-stripe-checkout";
import { emptyCart } from "../../Redux/Cart/CartAction";
import instance from "./../../Axios";
function StripeButton({ price }) {
  const dispatch = useDispatch();
  const Price = price * 100;
  const Public_Key =
    "pk_test_51KOeqdKNJWPh15dDwiQAAiEYgsFdBYUomPoGF0CGCO6TkoCA54xjdpm90kiziTCw0gvH0e0eVq0eyY49tkZCmpcm00KtZAsXw7";
  const onToken = (token) => {
    console.log(token);
    axios({
      url: "/payment",
      method: "POST",
      data: {
        amount: Price,
        token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .then(dispatch(emptyCart()))
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <StripeCheckOutButton
      name="Fliataris"
      description={`Big Data Stuff ${price}$`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label="Pay now" // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={Price} // cents
      currency="USD"
      stripeKey={Public_Key}
      locale=""
      email=""
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
    ></StripeCheckOutButton>
  );
}

export default StripeButton;
