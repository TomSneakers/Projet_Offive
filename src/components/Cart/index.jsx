
import React from 'react';
import CartFooter from './CartFooter.jsx'
import { Table } from '../components.jsx'

function Cart() {
  return (
    <Table heading="My Shopping Cart" subheading="items in your cart">
      <tbody> 
      <div>No Items in the cart yet </div>
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
