import { useSelector } from "react-redux";
import React from "react";
import CartFooter from "./CartFooter.jsx";
import { Table } from "../components.jsx";
import Row from "./Row.jsx";

function Cart() {
  const items = useSelector((state) => state.items);
  return (
    <Table
      items={items}
      heading="My Shopping Cart"
      subheading="items in your cart"
    >
      {!items.length && <div>Aucun article dans votre panier</div>}
      <tbody>
        {items.map((item) => (
          <Row key={item.id} {...item} />
        ))}
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
