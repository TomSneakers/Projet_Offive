import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../lib/redux/reducers/cart";
import product from "../Product.jsx"; // Importe les actions pour mettre à jour le panier
function Row({ id, name, price, quantity, category, imageUrl }) {
  const dispatch = useDispatch(); // Initialise le dispatch pour envoyer des actions Redux

  // Gère le changement de quantité dans l'input
  // const handleOnChange = (e) => {
  //   const newValue = Number(e.target.value);
  //   const newQuantity = newValue >= 1 ? newValue : 1;
  //   dispatch(updateCart(id, newQuantity)); // Appelle l'action pour mettre à jour la quantité dans le panier
  // };

  // Gère le clic sur le bouton de suppression d'article
  const handleOnClick = () => {
    dispatch(removeFromCart(id)); // Appelle l'action pour supprimer l'article du panier
  };

  // Calcule le prix total pour cet article
  return (
    <tr>
      <td data-th="Produit" style={{ width: "60%" }}>
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={imageUrl}
              className="img-fluid d-none d-md-block rounded mb-2 shadow"
            />
          </div>
          <div className="col-md-9 text-left mt-sm-2">
            <h4>{name}</h4>
            <p className="font-weight-light">{category}</p>
          </div>
        </div>
      </td>
      <td data-th="Prix total" style={{ width: "12%" }}>
        €{price.toFixed(2)}
      </td>
      <td data-th="Prix Unitaire" style={{ width: "12%" }}>
        €{price}
      </td>
      {/* <td data-th="Quantité">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          value={quantity}
          onChange={handleOnChange} // Appelle la fonction de gestion du changement de quantité
          style={{ width: "60%" }}
        />
      </td> */}

      <td className="actions" data-th="">
        <div className="text-right">
          {/* Bouton pour supprimer l'article du panier */}
          <button
            onClick={handleOnClick} // Appelle la fonction de gestion du clic sur le bouton de suppression
            className="btn btn-white border-secondary bg-white btn-md mb-2"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
export default Row;
