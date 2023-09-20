import React from "react";
import {Link} from "react-router-dom";
import {useCart} from "./cartContext.jsx";

function CartFooter() {
  // Sélectionner le total du panier à l'aide du sélecteur selectCartTotal
  const {cart, total} = useCart();

  return (
    <>
      <div className="text-right mb-4">
        <h4>Sous-total :</h4>
        <h1>${total.toFixed(2)}</h1>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/">
          <i className="fas fa-arrow-left mr-2"></i> Continuer les achats
        </Link>
        {/* Lien pour procéder au paiement avec condition de désactivation si le panier est vide */}
        <Link
          className={`btn btn-primary mb-4 btn-lg pl-5 pr-5 ${
            cart.length === 0 ? "disabled" : ""
          }`}
          to="/checkout"
          style={cart.length === 0 ? { pointerEvents: "none" } : {}}
        >
          Procéder au paiement
        </Link>
      </div>
    </>
  );
}

export default CartFooter;
