// Row.jsx
import { useCart } from "./cartContext.jsx";

function Row({ index, name, price, category, imageUrl }) {
  const { removeFromCart } = useCart();

  function handleRemove(index) {
    removeFromCart(index);
  }

  return (
    <tr className="cart-item">
      <td className="product-cell">
        <div className="product-details">
          <img src={imageUrl} alt={name} className="product-image" />
          <div className="product-info">
            <h4 className="product-name">{name}</h4>
            <p className="product-category">{category}</p>
          </div>
        </div>
      </td>
      <td className="price-cell">€{price.toFixed(2)}</td>
      <td className="unit-price-cell">€{price}</td>
      <td className="actions">
        <button
          onClick={() => handleRemove(index)}
          className="remove-button btn btn-danger"
        >
          <i className="fas fa-trash"></i> Supprimer
        </button>
      </td>
    </tr>
  );
}

export default Row;
