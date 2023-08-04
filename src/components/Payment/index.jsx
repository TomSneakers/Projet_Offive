import React from "react";
import Input from "./Input.jsx";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import selectCartTotal from "../../lib/redux/selector/index.js";
import Alert from "./Alert.jsx";
import Row from "./Row.jsx";
const styles = {
  width: "100%",
  shape: "rect",
  size: "large",
  color: "gold",
};
const client = {
  sandbox: "<ClientID>",
  production: "<ClientID>",
  env: "sandbox" /* change to 'production' for production purposes */,
};

const STATUS = {
  PENDING: "pending",
  COMPLETE: "complete",
  CONFIRMED: "confirmed",
  CANCELLED: "cancelled",
  FAILED: "error",
};

function Payment() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);
  const [isValid, setValid] = useState(false);
  const [status, setStatus] = useState(STATUS.PENDING);
  const processPayment = (payment) => {
    return new Promise((resolve) => {
      const data = {
        cartDetails: items,
        paymentData: payment,
      };
      console.log("The payment was succeeded!", payment);
      resolve(data);
    });
  };
  const addOrder = () => {
    return new Promise((resolve) => {
      console.log("order successfully confirmed and added");
      resolve();
    });
  };
  const confirmOrder = () => {
    debugger;
    return new Promise((resolve) => {
      setStatus(STATUS.CONFIRMED);
      // reset cart

      resolve();
    });
  };

  const handleOnSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await addOrder();
    await confirmOrder();
    await scrolltoTop();
    // history push
  };

  const onSuccess = async (payment) => {
    await processPayment(payment);
    setStatus(STATUS.COMPLETE);
  };
  const onCancel = async (data) => {
    console.log("The payment was cancelled!", data);
    setStatus(STATUS.CANCELLED);
  };
  const onError = async (err) => {
    console.log("Error!", err);
  };
  useEffect(() => setValid(status === STATUS.COMPLETE), [status]);

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        {/* Alert messages HERE */}
        <Alert.Confirmed status={status === STATUS.CONFIRMED} />
        <Alert.Cancelled status={status === STATUS.CANCELLED} />
        <Alert.Error status={status === STATUS.FAILED} />
        <div className="py-5 text-center row justify-content-center">
          <div className="col-md-10">
            <h2>Checkout</h2>
          </div>
        </div>
        <div className="row justify-content-center rounded shadow pt-5 pb-5 bg-white ">
          <div className="col-md-4 offset-1 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {items?.map((item) => (
                <Row key={item} {...item} />
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (EUR)</span>
                <strong>€{total.toFixed(2) || "0.00"}</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 order-md-1">
            <form onSubmit={handleOnSubmit}>
              <h4 className="mb-3">Payment</h4>
              <hr className="mb-4" />
              <div className="row">
                <Input
                  label="Name on the card"
                  className="col-md-6 mb-3"
                  id="cc-name"
                >
                  Name on card is required
                </Input>
                <Input
                  label="Credit card number"
                  className="col-md-6 mb-3"
                  id="cc-number"
                >
                  Credit card number is required
                </Input>
              </div>
              <div className="row">
                <Input
                  className="col-md-3 mb-3"
                  label="Expiration"
                  id="cc-expiration"
                >
                  Expiration date required
                </Input>
                <Input className="col-md-3 mb-3" label="CVV" id="cc-cvv">
                  Security code required
                </Input>
              </div>
              {/* Paypal Button */}
              <PayPalButtons
                env={client.env}
                client={client}
                currency="EUR"
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                disabled={!isValid}
              >
                <i className="far fa-credit-card"></i> Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Payment;
