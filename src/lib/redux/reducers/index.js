import { createStore, combineReducers } from "redux"; // Importation des fonctions createStore et combineReducers depuis la bibliothèque Redux
// import { configureStore } from "@reduxjs/toolkit"
import cart from "./cart"; // Importation du réducteur 'cart' depuis le fichier 'cart.js' dans le même répertoire
import user from "./user"; // Importation du réducteur 'user' depuis le fichier 'user.js' dans le même répertoire

// Combinaison des réducteurs 'cart' et 'user' en un réducteur unique à l'aide de combineReducers
const reducer = combineReducers({ cart, user });

// Création du magasin (store) Redux en utilisant le réducteur combiné et l'extension Redux DevTools pour le développement
export const store = createStore(
    reducer, // Le réducteur combiné gérant l'état global de l'application
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Activation de l'extension Redux DevTools si elle est disponible
);
