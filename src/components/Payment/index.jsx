import React, { useEffect } from "react";
import Input from "./Input.jsx";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useState, useRef } from "react"; // Remplacez useEffect par useRef pour éviter les boucles infinies
import selectCartTotal from "../../lib/redux/selector/index.js";
import Alert from "./Alert.jsx";
import Row from "./Row.jsx";
const styles = {
  width: "100%",
  shape: "rect",
  size: "large",
  color: "gold",
};

//Paypal Client
const client = {
  sandbox:
    "AUboQQIoteZsspFW2IEMfW4F9HRGC7xV7Iltx3z5Uc3d5o08ld_PLS2XEwIM8BgY29hjkKdstIxczIfN",
  production: "<ClientID>",
  env: "sandbox" /* Changer l'environnmenent lors de la mise en production*/,
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
    // debugger;
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
    console.log("Le paiement a été effectué avec succès !", payment);
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

  const paypalScriptRef = useRef(null);

  useEffect(() => {
    // Chargez le script PayPal avec le paramètre currency=EUR
    paypalScriptRef.current = document.createElement("script");
    paypalScriptRef.current.src = "https://www.paypal.com/sdk/js?currency=EUR";
    paypalScriptRef.current.async = true;
    document.body.appendChild(paypalScriptRef.current);
    // Nettoyez le script lors du démontage du composant
    return () => {
      if (paypalScriptRef.current) {
        paypalScriptRef.current.remove();
      }
    };
  }, []);

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
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "20", // Utilisez le montant réel de la commande ici
                        },
                      },
                    ],
                  });
                }}
                onError={onError}
                onApprove={onSuccess}
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
