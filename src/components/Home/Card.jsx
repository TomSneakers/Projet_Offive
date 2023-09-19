import React from "react";
import { Link } from "react-router-dom";

// Composant Card pour afficher les détails d'un produit sous forme de carte
function Card({ product }) {
  const { id, name, prices } = product; // Destructuration des propriétés du produit

  return (
    <div className="col-6 col-md-6 col-lg-4 mb-3">
      <div className="card h-100 border-0">
        <div className="card-img-top">
          <img
            src={product.imageUrl}
            className="img-fluid mx-auto d-block"
            alt="Card img cap"
          />
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">
            <Link
              to={"/product"}
              state={{ product }}
              className="font-weight-bold text-dark text-uppercase small" // Classe de style pour le texte en gras et en majuscules
            >
              {name}
            </Link>
          </h4>
          <h5 className="card-price small text-warning">{prices["sm"]}€</h5>
        </div>
      </div>
    </div>
  );
}
export default Card; // Exporte le composant Card
