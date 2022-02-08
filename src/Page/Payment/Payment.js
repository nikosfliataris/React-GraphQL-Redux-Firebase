import React from "react";
import "./Payment.scss";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentDetails from "../../Component/PaymentDetails/PaymentDetails";
const stripePromise = loadStripe("Stripe_Public_key");
function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
}

export default Payment;
