import React from "react"; // Importation du module 'React' depuis la bibliothèque React

// Création d'un contexte React
export const Context = React.createContext();

// Définition du composant 'FilterProvider'
const FilterProvider = ({ children }) => {
  const categories = ["Women", "Men", "Kids", "Accessories"]; // Tableau des catégories disponibles
  const filters = ["Top", "Bottom", "Jacket"]; // Tableau des filtres disponibles
  const [category, setCategory] = React.useState(
    categories[0].toLocaleLowerCase()
  ); // État pour stocker la catégorie sélectionnée
  const [filtersChecked, setFiltersChecked] = React.useState({
    Top: false,
    Bottom: false,
    Jacket: false,
  }); // État pour stocker les filtres cochés
  const updateCategory = (value) => setCategory(value); // Fonction pour mettre à jour la catégorie
  const updateFilters = (e) =>
    setFiltersChecked((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    })); // Fonction pour mettre à jour les filtres cochés

  // Fonction pour filtrer et retourner les clés des filtres cochés
  const filtersKeys = () => {
    return Object.entries(filtersChecked)
      .map(([key, value]) => value && key)
      .filter((obj) => !!obj);
  };

  // Création de la valeur à fournir dans le contexte
  const value = React.useMemo(() => {
    return {
      categories,
      filters,
      updateCategory,
      category,
      updateFilters,
      filtersChecked: filtersKeys(),
    };
  }, [category, filtersChecked]);

  // Rendu du contexte avec la valeur fournie et les enfants (components enfants)
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// Fonction utilitaire pour fournir le contexte à un composant enfant
export const withContext = (WrappedComponent) => {
  return () => (
    <Context.Consumer>
      {(value) => <WrappedComponent value={value} />}
    </Context.Consumer>
  );
};

// Exportation du composant 'FilterProvider' par défaut
export default FilterProvider;
