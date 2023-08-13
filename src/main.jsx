import React from "react"; // Importation du module 'React' depuis la bibliothèque React
import ReactDOM from "react-dom"; // Importation du module 'ReactDOM' depuis la bibliothèque React-DOM
import App from "./App.jsx"; // Importation du composant 'App' depuis le fichier 'App.jsx' dans le même répertoire
import "./index.css"; // Importation du fichier CSS 'index.css' (styles globaux de l'application)
import "bootstrap/dist/css/bootstrap.min.css"; // Importation des styles CSS minifiés de Bootstrap

import FilterProvider from "./context/index.jsx"; // Importation du composant 'FilterProvider' depuis le fichier 'index.jsx' dans le répertoire 'context'
import { Provider } from "react-redux"; // Importation du composant 'Provider' depuis la bibliothèque 'react-redux' (gestion de l'état global)
import { store } from "./lib/redux/reducers/index.js"; // Importation du magasin (store) Redux depuis le répertoire 'reducers' dans le répertoire 'redux'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"; // Importation de classes et de composants nécessaires pour Apollo Client (gestion des requêtes GraphQL)
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Importation du composant 'PayPalScriptProvider' depuis la bibliothèque 'react-paypal-js' (intégration de PayPal)

const client = new ApolloClient({
  // Création d'une instance d'Apollo Client pour gérer les requêtes GraphQL
  uri: "http://localhost:2023/graphql", // URL de l'endpoint GraphQL à interroger
  cache: new InMemoryCache(), // Mise en cache des données pour améliorer les performances
});
// Utilisation de ReactDOM.createRoot().render() pour monter votre application dans le DOM
ReactDOM.render(
  <React.StrictMode>
    {/* Mode strict pour détecter les problèmes potentiels */}
    <ApolloProvider client={client}>
      {/* Fournit l'instance d'Apollo Client à l'ensemble de l'application */}
      <FilterProvider>
        {/* Fournit le contexte de filtre à l'ensemble de l'application */}
        <Provider store={store}>
          {/* Fournit le magasin Redux (store) à l'ensemble de l'application */}
          <PayPalScriptProvider options={{ clientId: "test", currency: "EUR" }}>
            {/* Fournit les options de configuration à PayPalScriptProvider */}
            <App /> {/* Affiche le composant principal de l'application */}
          </PayPalScriptProvider>
        </Provider>
      </FilterProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root") // Montre le contenu JSX dans l'élément DOM avec l'ID 'root'
);
