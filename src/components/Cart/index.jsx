import { useSelector } from "react-redux";
import React from "react";
import CartFooter from "./CartFooter.jsx"; // Importe le composant CartFooter
import { Table } from "../components.jsx"; // Importe le composant Table
import Row from "./Row.jsx"; // Importe le composant Row

function Cart() {
  // Sélectionne les articles du panier à l'aide du sélecteur useSelector
  const items = useSelector((state) => state.cart.items);

  return (
    <Table
      items={items}
      heading="Mon Panier"
      subheading="articles dans votre panier"
    >
      {/* Affiche un message si le panier est vide */}
      {!items.length && <div>Aucun article dans votre panier</div>}
      <tbody>
        {items.map((item) => (
          <Row
            key={item.id}
            {...item}
          /> /* Affiche chaque article à l'aide du composant Row */
        ))}
      </tbody>
      <CartFooter />{" "}
      {/* Affiche le pied de page du panier à l'aide du composant CartFooter */}
    </Table>
  );
}
export default Cart;
