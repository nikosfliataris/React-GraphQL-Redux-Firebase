const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KOeqdKNJWPh15dDh2QuLeFXZ6nRsrJTnjZ3iow5G8tR9c8IfNFoLsPesh1ROHih0pRZ1EZ55brBksvy5k0RDF9q004C0THErh"
);

const app = express();
app.use(express());
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.status(200).send("hello from"));

app.post("/payment", async (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      response.status(500).send({ error: stripeErr });
    } else {
      response.status(200).send({ success: stripeRes });
    }
  });
});

exports.api = functions.https.onRequest(app);
