import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "../components"; // Importe le composant 'Table' depuis le dossier 'components'
import { useSelector } from "react-redux";
import { GET_ORDERS } from "../../lib/queries"; // Importe la requête 'GET_ORDERS' depuis le dossier 'lib/queries'

function Orders() {
  // Définit le composant fonctionnel 'Orders'
  const { current } = useSelector((state) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GET_ORDERS().then((response) => {
      const orders = response
        .filter((item) => item.ownerId === current?.googleId)
        .reverse();
      setItems(orders);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    // Rendu JSX du composant 'Orders'
    <div className="order">
      <h2>Mes commandes</h2>
      <div className="table-responsive">
        <table className="order_box">
          <thead className="bg-black mb-2">
            <tr>
              <th>N°Commande</th>
              <th className="margin_order">Date</th>{" "}
              {/* Alignement au centre */}
              {/* <th className="text-right margin-action">Actions</th>{" "} */}
              {/* Alignement au centre */}
            </tr>
          </thead>
          <tbody>
            {!items?.length && (
              <tr>
                <td colSpan="3" className="text-center">
                  Aucune commande pour le moment.
                </td>
              </tr>
            )}
            {items?.map((item, index) => (
              <tr key={`${item._id}-${index}`}>
                <td>
                  <h4>Commande n° {item._id}</h4>
                </td>
                <td>{formatDate(item.date)}</td>
                <td>
                  <button className="btn btn-outline-secondary btn-sm mb-2">
                    <i className="fas fa-sync"></i> Actualiser
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-4 col-sm-6 col-12 mb-3 mb-md-1 text-center">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left mr-2"></i> Continuer les achats
          </Link>
        </div>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const timestamp = parseInt(dateString);
  const formattedDate = new Date(timestamp);
  const isDateValid = !isNaN(formattedDate);

  return isDateValid ? formattedDate.toLocaleString() : dateString;
}

export default Orders; // Exporte le composant 'Orders'
