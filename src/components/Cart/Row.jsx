import {useCart} from "./cartContext.jsx";

function Row({index, name, price, category, imageUrl}) {
    const {removeFromCart} = useCart();

    function handleRemove(index){
        removeFromCart(index);
    }

    // Calcule le prix total pour cet article
    return (
        <tr>
            <td data-th="Produit" style={{width: "60%"}}>
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
            <td data-th="Prix total" style={{width: "12%"}}>
                €{price.toFixed(2)}
            </td>
            <td data-th="Prix Unitaire" style={{width: "12%"}}>
                €{price}
            </td>
            <td className="actions" data-th="">
                <div className="text-right">
                    {/* Bouton pour supprimer l'article du panier */}
                    <button
                        onClick={() => handleRemove(index)} // Appelle la fonction de gestion du clic sur le bouton de suppression
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
