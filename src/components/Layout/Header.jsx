import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GoogleBtn from "./GoogleBtn";
import { useCart } from "../Cart/cartContext.jsx";

// Composant CartDropdown pour afficher le panier déroulant
function CartDropdown({ show, handleOnClick }) {
  const { cart, total } = useCart();

  return (
    <div
      onClick={handleOnClick}
      className={`dropdown-menu dropdown-menu-right p-3 ${show && "show"}`}
      aria-labelledby="dropdownCart"
      style={{ minWidth: "300px" }}
    >
      <div className="d-flex justify-content-between">
        <span>
          {cart.length} {!!cart.length && "articles"}
        </span>

        <span className="emphasis">€{total.toFixed(2)}</span>
      </div>
      <div className="dropdown-divider"></div>
      <ul
        className="shopping-cart-items pt-2 pl-0"
        aria-labelledby="dropdownCart"
      >
        {items.map((item) => {
          return (
            <li className="row mt-3" key={item.id}>
              <div className="col-md-4 col-2">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="img-fluid rounded mb-2 shadow"
                />
              </div>
              <div className="col-8">
                <h6>
                  <Link
                    to={"/product"}
                    state={{ product: item }}
                    className="font-weight-bold text-dark text-uppercase small"
                  >
                    {item.name}
                  </Link>
                </h6>
                <span className="emphasis">€{item.price.toFixed(2)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <Link
        to="/Panier"
        className="btn btn-md btn-block btn-orange mt-3"
        style={{ margin: 0 }}
      >
        Voir le panier
      </Link>
    </div>
  );
}

function Header() {
  const [currentLink] = React.useState("");
  const [show, setShow] = React.useState(false);
  const links = ["cart", "orders"];
  const handleOnClick = () => setShow(!show);
  const { cart } = useCart();

  return (
    <header className="target-hover">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand font">
            <img
              src="/logo.png" // Assurez-vous que le chemin de l'image est correct et relatif au répertoire public de votre projet.
              alt="Logo"
              style={{ width: "150px", height: "150px", margin: "-50px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav3"
            aria-controls="navbarNav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav3">
            <ul className="navbar-nav ml-auto">
              {links.map((link, index) => {
                const isCurrent = link === currentLink;
                const isActive = link === currentLink && "active";
                return (
                  <li key={index} className={`nav-item ${isActive}`}>
                    <Link
                      to={link}
                      className="nav-link"
                      aria-current={isCurrent}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
              <li
                className={`nav-item dropdown ${show && "show"}`}
                onClick={handleOnClick}
              >
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge bg-orange">{items.length}</span>
                </a>
                <CartDropdown show={show} handleOnClick={handleOnClick} />
              </li>
            </ul>
            <GoogleBtn />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
