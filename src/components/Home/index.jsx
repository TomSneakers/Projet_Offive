import React from "react";
import Sidebar from "./Sidebar.jsx"; // Importe le composant Sidebar
import Gallery from "./Gallery.jsx"; // Importe le composant Gallery
import { withContext } from "../../context/index.jsx"; // Importe le HOC (Higher Order Component) withContext

// Composant principal de la page d'accueil
function Home({ value }) {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <Sidebar {...value} />
          {/* Affiche la barre latérale en utilisant le composant Sidebar */}
          <Gallery {...value} />
          {/* Affiche la galerie d'images en utilisant le composant Gallery */}
        </div>
      </div>
    </section>
  );
}

export default withContext(Home); // Exporte le composant Home en l'enveloppant avec le HOC withContext
