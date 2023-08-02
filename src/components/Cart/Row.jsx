import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../lib/redux/reducers/cart";
function Row({ id, name, price, quantity, category }) {
  const dispatch = useDispatch();
 
  const handleOnChange = (e) => {
    const newValue = Number(e.target.value);
    const newQuantity = newValue >= 1 ? newValue : 1;
    dispatch(updateCart(id, newQuantity));
  };

  const handleOnClick = () => {
    dispatch(removeFromCart(id));
  };
  const totalPrice = price * quantity;
  return (
    <tr>
      <td data-th="Product" style={{ width: "60%" }}>
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={`images/${id}.png`}
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
        ${totalPrice.toFixed(2)}
      </td>
      <td data-th="Prix Unitaire" style={{ width: "12%" }}>
        ${price}
      </td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          value={quantity}
          onChange={handleOnChange}
          style={{ width: "60%" }}
        />
      </td>

      <td className="actions" data-th="">
        <div className="text-right">
          {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-sync"></i>
          </button> */}
          <button
            onClick={handleOnClick}
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
