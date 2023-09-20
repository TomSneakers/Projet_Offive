// Définition du réducteur (reducer) 'cart' avec une valeur par défaut pour l'état initial
export default function cart(state = { items: [] }, action) {
    switch (action.type) {
        case "ADD_TO_CART": // Cas où l'action est "ADD_TO_CART"
            return {
                items: [...state.items, action.payload.item] // Ajoute un nouvel élément au panier avec les éléments existants
            }
        case "UPDATE_CART": // Cas où l'action est "UPDATE_CART"
            return {
                items: state.items.map(item => {
                    if (item.id == action.payload.id) { // Si l'ID de l'élément correspond à l'ID de l'action
                        item.quantity = action.payload.quantity; // Met à jour la quantité de l'élément
                        return item; // Renvoie l'élément mis à jour
                    }
                    return item; // Renvoie l'élément inchangé
                })
            }
        case "REMOVE_FROM_CART": // Cas où l'action est "REMOVE_FROM_CART"
            return {
                items: state.items.filter((item) => item.id !== action.payload.id) // Retire un élément du panier en filtrant les éléments par ID
            }
        case "RESET_CART": // Cas où l'action est "RESET_CART"
            return {
                items: [] // Réinitialise le panier en le vidant
            }

        default:
            return state // Retourne l'état inchangé si l'action n'est pas reconnue
    }
}

// Définition des créateurs d'actions (action creators)

// Créateur d'action pour réinitialiser le panier
export function resetCart() {
    return {
        type: "RESET_CART", // Type d'action correspondant à la réinitialisation du panier
    }
}

// Créateur d'action pour ajouter un élément au panier
export function addToCart(item) {
    return {
        type: "ADD_TO_CART", // Type d'action correspondant à l'ajout d'un élément au panier
        payload: { item } // Données associées à l'action (ici, l'élément à ajouter)
    }
}
