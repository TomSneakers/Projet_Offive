import React from 'react';
import { Link } from "react-router-dom";
import selectCartTotal  from "../../lib/redux/selector/index.js";
import { useSelector } from "react-redux";

 

function CartFooter() {
  const total = useSelector(selectCartTotal)
  const items = useSelector((state) => state.items)
  return (
    <>
      <div className="text-right mb-4">
        <h4>Subtotal:</h4>
        <h1>${total.toFixed(2  )}</h1>
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/">
          <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
        </Link>
        <Link
  className={`btn btn-primary mb-4 btn-lg pl-5 pr-5 ${items.length === 0 ? "disabled" : ""}`}
  to="/checkout"
  style={items.length === 0 ? { pointerEvents: "none" } : {}}
>
checkout</Link>
          
        
      </div>
    </>
  )
}
export default CartFooter