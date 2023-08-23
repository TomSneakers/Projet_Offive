import React from "react";
import Filters from "./Filters.jsx"; // Importe le composant Filters

// Composant Sidebar pour la barre latérale
function Sidebar({ categories, filters }) {
  return (
    <div className="col-md-4 order-md-1 col-lg-3 sidebar-filter">
      <h6 className="text-uppercase font-weight-bold mb-3">Catégories</h6>
      {categories.map((filter, index) => (
        <Filters.Category key={index} index={index} name={filter} />
        /* Affiche les catégories en utilisant le composant Filters.Category */
      ))}
    </div>
  );
}

export default Sidebar; // Exporte le composant Sidebar
