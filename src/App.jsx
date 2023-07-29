import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Home from "./components/Home/index.jsx";
import Cart from "./components/Cart/index.jsx";
import Product from "./components/Product.jsx";
import Checkout from "./components/Checkout/index.jsx";
import Orders from "./components/Orders/index.jsx";
import Payment from "./components/Payment/index.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
