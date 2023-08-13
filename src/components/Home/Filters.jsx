import React from "react";
import { Context } from "../../context/index.jsx";

// Définition des composants de filtres
const Filters = {
  // Composant pour la catégorie
  Category: function ({ name }) {
    const { updateCategory, category } = React.useContext(Context); // Obtient les valeurs du contexte
    const handleOnChange = (e) => updateCategory(e.target.value); // Gère le changement de catégorie
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            type="radio"
            onChange={handleOnChange}
            name="category"
            value={name}
            className="custom-control-input"
            id={name}
            checked={category.toLowerCase() === name.toLowerCase()} // Vérifie si cette catégorie est sélectionnée
          />
          &nbsp;
          <label className="custom-control-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
  // Composant pour le filtre
  Filter: function ({ name }) {
    const { updateFilters } = React.useContext(Context); // Obtient la fonction de mise à jour des filtres depuis le contexte
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            name={name}
            onChange={updateFilters}
            type="checkbox"
            className="custom-control-input"
            id={name}
          />
          &nbsp;
          <label className="custom-control-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
};

export default Filters; // Exporte les composants de filtres
