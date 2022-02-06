const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KOeqdKNJWPh15dDh2QuLeFXZ6nRsrJTnjZ3iow5G8tR9c8IfNFoLsPesh1ROHih0pRZ1EZ55brBksvy5k0RDF9q004C0THErh"
);

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: true }));

// app.get("/", (req, res) => res.status(200).send("hello from sever"));

// app.post("/payment/create", async (request, response) => {
//   try {
//     const { amount, shipping } = request.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       shipping,
//       currency: "usd",
//     });
//     response.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (err) {
//     response.status(500).json({
//       statusCode: 500,
//       message: err.message,
//     });
//   }
// });

// app.get("*", (request, response) => {
//   response.status(404).send("404 Not Found");
// });
// exports.api = functions.https.onRequest(app);

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
