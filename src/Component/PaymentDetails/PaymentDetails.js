import React, { useState } from "react";
import "./PaymentDetails.scss";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "./../../Axios";
import Form from "../FormInput/Form";
import Button from "../FormButton/Custom-Button";

function PaymentDetails() {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user.User);
  const [fullname, setFullname] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { Total_Price } = useSelector(({ cart: { cartItem } }) => ({
    Total_Price: cartItem.reduce(
      (accumelatedPrice, cartItem) =>
        accumelatedPrice + cartItem.quantity * cartItem.price,
      0
    ),
  }));
  console.log(user);
  console.log(price);
  const handleSubmit = (e) => {
    e.preventDefault();
    const cardElement = elements.getElement("card");
    axios
      .post("/payment/create", {
        amount: Total_Price * 100,
        shipping: {
          name: fullname,
          address: address,
          email: email,
        },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
          })
          .then(({ paymentMethod }) => {
            stripe.confirmCardPayment(clientSecret, {
              payment_method: paymentMethod.id,
            });
          });
      });
  };
  return (
    <div className="paymentdetails">
      <form className="payment-form" onSubmit={handleSubmit}>
        {user ? (
          <Form
            name="First Name/Last Name"
            type="text"
            label="First Name/Last Name"
            value={user.displayName}
            handleChange={(e) => setFullname(e.target.value)}
            required
          />
        ) : (
          <Form
            name="First Name/Last Name"
            type="text"
            label="First Name/Last Name"
            value={fullname}
            handleChange={(e) => setFullname(e.target.value)}
            required
          />
        )}
        <Form
          name="Address"
          type="text"
          label="Address"
          value={address}
          handleChange={(e) => setAddress(e.target.value)}
          required
        />
        {user ? (
          <Form
            name="email"
            type="email"
            label="Email"
            value={user.email}
            handleChange={(e) => setEmail(e.target.value)}
            required
          />
        ) : (
          <Form
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            required
          />
        )}

        <Form
          name="Total"
          type="text"
          label="Total Price"
          value={`${Total_Price}$`}
          handleChange={(e) => setPrice(Total_Price)}
          required
        />
        <CardElement className="card-details" />
        <Button type="submit">Payment</Button>
      </form>
    </div>
  );
}

export default PaymentDetails;
