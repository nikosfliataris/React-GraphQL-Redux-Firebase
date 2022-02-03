import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  gql,
  ApolloClient,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      {
        getCollectionsByTitle(title: "hats") {
          id
          title
          items {
            id
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
