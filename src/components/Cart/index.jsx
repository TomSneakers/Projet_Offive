import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cartContext.jsx";

function Cart() {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="container panier">
      <h1 className="mt-4">Mon Panier</h1>
      {cart.length === 0 ? (
        <div className="alert alert-info mt-3">
          Aucun article dans votre panier
        </div>
      ) : (
        <table className="panier_box">
          <thead className="bg-black mb-2">
            <tr>
              <th>Produit</th>
              <th className="margin_price">Prix</th>{" "}
              {/* Alignement au centre */}
              <th className="text-right">Actions</th>{" "}
              {/* Alignement au centre */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <div className="media">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="mr-3"
                      style={{ width: "30%" }}
                    />
                    <div className="media-body">
                      <h4>{item.name}</h4>
                      <p>{item.category}</p>
                    </div>
                  </div>
                </td>
                <td className="text-center">€{item.price.toFixed(2)}</td>{" "}
                {/* Alignement au centre */}
                <td className="text-center">
                  {" "}
                  {/* Alignement au centre */}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <h4>Sous-total :</h4>
            <h1 className="text-primary">€{total.toFixed(2)}</h1>
          </div>
          <div className="col-md-6">
            <Link to="/" className="btn btn-secondary mr-2">
              <i className="fas fa-arrow-left"></i> Continuer les achats
            </Link>
            <Link
              to="/checkout"
              className={`btn btn-primary ${
                cart.length === 0 ? "disabled" : ""
              }`}
              style={cart.length === 0 ? { pointerEvents: "none" } : {}}
            >
              Procéder au paiement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
