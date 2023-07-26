import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterProvider from "./context/index.jsx";
import {Provider} from "react-redux";
import {store} from "./lib/redux/reducers/index.js";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:2021/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <FilterProvider>
              <Provider store={store}>
                  <App />
              </Provider>
          </FilterProvider>
      </ApolloProvider>
  </React.StrictMode>,
)
