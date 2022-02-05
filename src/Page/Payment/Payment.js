import React from "react";
import "./Payment.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentDetails from "../../Component/PaymentDetails/PaymentDetails";
const stripePromise = loadStripe(
  "pk_test_51KOeqdKNJWPh15dDwiQAAiEYgsFdBYUomPoGF0CGCO6TkoCA54xjdpm90kiziTCw0gvH0e0eVq0eyY49tkZCmpcm00KtZAsXw7"
);
function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
}

export default Payment;
