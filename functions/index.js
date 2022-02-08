const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "Stripe_Secret_Key"
);

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: true }));

exports.api = functions.https.onRequest(
  app.post("/payment/create", async (req, res) => {
    const { amount } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  })
);
