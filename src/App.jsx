import React from "react"; // Importation du module 'React' depuis la bibliothèque React
import "./App.css"; // Importation du fichier CSS 'App.css' (styles spécifiques au composant App)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation des composants de routage depuis 'react-router-dom'
import Layout from "./components/Layout/index.jsx"; // Importation du composant 'Layout' depuis le répertoire 'components/Layout'
import Home from "./components/Home/index.jsx"; // Importation du composant 'Home' depuis le répertoire 'components/Home'
import Cart from "./components/Cart/index.jsx"; // Importation du composant 'Cart' depuis le répertoire 'components/Cart'
import Product from "./components/Product.jsx"; // Importation du composant 'Product' depuis le répertoire 'components'
import Checkout from "./components/Checkout/index.jsx"; // Importation du composant 'Checkout' depuis le répertoire 'components/Checkout'
import Orders from "./components/Orders/index.jsx"; // Importation du composant 'Orders' depuis le répertoire 'components/Orders'
import Payment from "./components/Payment/index.jsx"; // Importation du composant 'Payment' depuis le répertoire 'components/Payment'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Politique from "./components/Layout/Politique";
function App() {
  // Définition du composant fonctionnel App
  return (
    // Rendu du composant App
    <Router>
      {/* Utilisation du composant Router pour gérer les routes */}
      <Layout>
        {/* Utilisation du composant Layout comme conteneur principal de l'application */}
        <Routes>
          {/* Utilisation du composant Routes pour définir les différentes routes de l'application */}
          <Route path="/" element={<Home />} />
          <Route path="/Politique-de-confidentialité" element={<Politique />} />
          {/* Définition de la route '/' pour afficher le composant Home */}
          <Route path="/cart" element={<Cart />} />
          {/* Définition de la route '/cart' pour afficher le composant Cart */}
          <Route path="/product" element={<Product />} />
          {/* Définition de la route '/product' pour afficher le composant Product */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Définition de la route '/checkout' pour afficher le composant Checkout */}
          <Route path="/orders" element={<Orders />} />
          {/* Définition de la route '/orders' pour afficher le composant Orders */}
          <Route path="/payment" element={<Payment />} />
          {/* Définition de la route '/payment' pour afficher le composant Payment */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; // Exportation du composant App comme composant principal de l'application
