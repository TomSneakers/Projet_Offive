import React from "react";
import CartFooter from "./CartFooter.jsx"; // Importe le composant CartFooter
import {Table} from "../components.jsx"; // Importe le composant Table
import Row from "./Row.jsx";
import {useCart} from "./cartContext.jsx"; // Importe le composant Row

function Cart() {
  // Sélectionne les articles du panier à l'aide du sélecteur useSelector
  const {cart} = useCart();

  return (
    <Table
      items={cart}
      heading="Mon Panier"
      subheading="articles dans votre panier"
    >
      {/* Affiche un message si le panier est vide */}
      {!cart.length && <div>Aucun article dans votre panier</div>}
      <tbody>
        {cart.map((item, index) => (
          <Row
            key={item.id}
            index={index}
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
