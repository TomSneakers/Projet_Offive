import React, { useState } from "react"; // Importation du module 'React' et 'useState' depuis la bibliothèque React
import { Link, useLocation } from "react-router-dom"; // Importation des composants 'Link' et 'useLocation' depuis 'react-router-dom'
import { useDispatch } from "react-redux"; // Importation de la fonction 'useDispatch' depuis Redux
import { addToCart } from "../lib/redux/reducers/cart"; // Importation de l'action 'addToCart' depuis le répertoire 'cart' dans le dossier Redux
import "bootstrap/dist/css/bootstrap.min.css"; // Importation des styles Bootstrap

// Définition du composant 'Product'
function Product() {
  const location = useLocation(); // Récupération de l'emplacement courant depuis 'useLocation'
  const product = location.state.product; // Extraction du produit à partir de l'emplacement

  // États locaux pour les détails du produit (quantité et taille) et le prix
  const [price, setPrice] = useState(product.prices["sm"]);

  const dispatch = useDispatch(); // Initialisation de la fonction de dispatch Redux

  // Fonction pour ajouter le produit au panier
  const addCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      filter: product.filter,
      price: price,
      imageUrl: product.imageUrl,
      category: product.category,
    };
    dispatch(addToCart({ ...item })); // Appel à l'action 'addToCart' avec les détails du produit
  };

  // Gestionnaire de changement pour les entrées de l'utilisateur
  const handleOnChange = (e) => {
    const selectedPrice = e.target.value;
    setPrice(product.prices[selectedPrice]);
  };

  // Rendu du composant Product
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="product-image d-block mt-3">
              <img
                className="img-fluid"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
            <h2 className="mb-3 mt-0">{product.name}</h2>
            <p className="lead mt-2 mb-3 primary-color">{price}€</p>
            <h5 className="mt-4">Description</h5>
            <p>{product.description}</p>
            <div className="row mt-4">
              <div className="col-6">
                <label htmlFor="size">Size</label>
                <select
                  defaultValue="sm"
                  name="size"
                  id="size"
                  className="custom-select form-control mb-4"
                  onChange={handleOnChange}
                >
                  <option value="" disabled>
                    Sélectionnez votre taille
                  </option>
                  <option value="sm">Petite</option>
                  <option value="md">Normale</option>
                  <option value="lg">Grande</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-block btn-lg border border-orange text-orange"
              onClick={addCart}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
          <Link to="/">
            <i className="fas fa-arrow-left mr-2"></i> Retour
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product; // Exportation du composant 'Product' par défaut
