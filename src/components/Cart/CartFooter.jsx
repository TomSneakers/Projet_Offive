// CartFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cartContext.jsx";

function CartFooter() {
  const { cart, total } = useCart();

  return (
    <div className="cart-footer">
      <div className="subtotal-section">
        <h4>Sous-total :</h4>
        <h1 className="subtotal">${total.toFixed(2)}</h1>
      </div>
      <div className="cart-actions">
        <Link to="/" className="continue-shopping">
          <i className="fas fa-arrow-left mr-2"></i> Continuer les achats
        </Link>
        <Link
          to="/checkout"
          className={`checkout-button btn btn-primary ${
            cart.length === 0 ? "disabled" : ""
          }`}
          style={cart.length === 0 ? { pointerEvents: "none" } : {}}
        >
          Procéder au paiement
        </Link>
      </div>
    </div>
  );
}

export default CartFooter;
