import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterProvider from "./context/index.jsx";
import { Provider } from "react-redux";
import { store } from "./lib/redux/reducers/index.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const client = new ApolloClient({
  uri: "http://localhost:2023/graphql",
  cache: new InMemoryCache(),
});

// Utilisez ReactDOM.createRoot().render() pour monter votre application dans le DOM

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FilterProvider>
        <Provider store={store}>
          <PayPalScriptProvider options={{ clientId: "test", currency: "EUR" }}>
            <App />
          </PayPalScriptProvider>
        </Provider>
      </FilterProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
