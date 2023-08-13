import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../lib/queries";
import Card from "./Card.jsx";
import { Context } from "../../context/index.jsx";

// Styles pour la galerie d'images
const styles = {
  gallery: {
    height: "calc(100vh - 120px)",
    overflow: "scroll",
  },
};

// Composant de la galerie d'images
function Gallery({ category }) {
  const { filtersChecked } = React.useContext(Context); // Obtient les filtres cochés depuis le contexte
  let array = []; // Tableau pour stocker les produits avec filtres
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { category: category },
  });

  // Fonction pour obtenir les produits avec filtres
  const productWithFilters = () => {
    if (!filtersChecked.length) {
      return data?.products;
    }
    filtersChecked.forEach((filter) => {
      array = [
        ...array,
        ...data?.products?.filter(
          (product) => product.filter === filter.toLowerCase()
        ),
      ];
    });
    return array;
  };

  // Gestion des différents états de chargement et d'erreur
  if (loading) return <div>En cours de chargement...</div>;
  if (error) return <div>Une erreur est survenue...</div>;
  if (!data) return <div>Aucune donnée trouvée...</div>;

  const products = productWithFilters(); // Obtenir les produits avec filtres
  return (
    <div className="col-md-8 order-md-2 col-lg-9">
      <div className="container-fluid" style={styles.gallery}>
        <div className="row">
          {products.map((product) => (
            <Card key={product.id} product={product} /> // Affiche chaque produit sous forme de carte
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery; // Exporte le composant de la galerie d'images
