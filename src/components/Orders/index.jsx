import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Table } from "../components"; // Importe le composant 'Table' depuis le dossier 'components'
import { useSelector } from "react-redux";
import { GET_ORDERS } from "../../lib/queries"; // Importe la requête 'GET_ORDERS' depuis le dossier 'lib/queries'
import Row from "./Row"; // Importe le composant 'Row' depuis le dossier actuel ('.')
import { useEffect, useState } from "react";

function Orders() {
  // Définit le composant fonctionnel 'Orders'
  const { current } = useSelector((state) => state.user);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GET_ORDERS().then((response) => {
      const orders = response.filter(
        (item) => item.ownerId === current?.googleId
      ).reverse();
      setItems(orders);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    // Rendu JSX du composant 'Orders'
    <div>
      <Table
        heading="Mes commandes"
        subheading="commandes dans votre compte"
        items={items}
      >
        <tbody>
          {!items?.length && (
            <div>Aucun article dans le panier pour le moment </div>
          )}
          {items?.map((item, index) => (
            <Row key={`${item.id}-${index}`} {...item} />
          ))}
        </tbody>
      </Table>
      <div className="row mt-4 d-flex">
        <div className="col-sm-4 mb-3 mb-m-1 text-md-left">
          <Link to="/">
            <i className="fas fa-arrow-left mr-2"></i> Continuer les achats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders; // Exporte le composant 'Orders'
