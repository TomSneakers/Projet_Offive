import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/redux/reducers/cart";
import "bootstrap/dist/css/bootstrap.min.css";

function Product() {
  const location = useLocation();
  const product = location.state.product;

  const [details, setDetails] = useState({ quantity: 1, size: "" });
  const [price, setPrice] = useState(product.price);

  const dispatch = useDispatch();

  const addCart = () => {
    if (details.size === "") {
      alert("Veuillez sélectionner une taille.");
      return;
    }
    const item = {
      id: product.id,
      name: product.name,
      filter: product.filter,
      price: price,
      category: product.category,
    };
    dispatch(addToCart({ ...item, ...details }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "size") {
      const newSize = value;
      let newPrice = product.price;
      if (newSize === "medium") {
        newPrice = product.price + 10;
      } else if (newSize === "large") {
        newPrice = product.price + 20;
      }
      setPrice(newPrice);
    }
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="product-image d-block mt-3">
              <img
                className="img-fluid"
                src={`images/${product.id}.png`}
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-2 text-center text-md-left">
            <h2 className="mb-3 mt-0">{product.name}</h2>
            <p className="lead mt-2 mb-3 primary-color">{price}€</p>
            <h5 className="mt-4">Description</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              venenatis velit vestibulum massa sollicitudin auctor. Cras ac
              venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi
              sem ornare quam, sed ultricies mi nisl sit amet purus.
            </p>
            <p>
              Suspendisse potenti. Nunc in libero luctus, sagittis leo sit amet,
              volutpat lacus. Quisque a porta risus. Integer aliquet nibh vitae
              vestibulum accumsan
            </p>
            <h5 className="mt-5">Care Instructions</h5>
            <p>
              Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem
              malesuada magna mollis euismod.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <label htmlFor="size">Size</label>
                <select
                  defaultValue=""
                  name="size"
                  id="size"
                  className="custom-select form-control mb-4"
                  onChange={handleOnChange}
                >
                  <option value="" disabled>
                    Sélectionnez votre taille
                  </option>
                  <option value="small">Petite</option>
                  <option value="medium">Normale</option>
                  <option value="large">Grande</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  defaultValue="1"
                  id="quantity"
                  name="quantity"
                  type="number"
                  className="form-control quantity  mb-4"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-block btn-lg border border-orange text-orange"
              onClick={addCart}
              disabled={details.size === ""}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
          <Link to="/">
            <i className="fas fa-arrow-left mr-2"></i> Retour
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
