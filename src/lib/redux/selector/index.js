function calculateTotal(num1, num2) {
    return num1 + num2;
}

// Définition d'une fonction nommée 'calculateTotal' qui prend deux nombres en entrée et retourne leur somme

const selectItems = (state) => state.cart.items;
// Définition d'une fonction fléchée nommée 'selectItems' qui prend l'état (state) en entrée et retourne les éléments du panier (cart.items)

export default function selectCartTotal(state) {
    return selectItems(state) // Appel à la fonction 'selectItems' pour obtenir la liste des éléments du panier
        .map((item) => item.price) // Utilisation de 'map' pour calculer le prix total de chaque élément (prix * quantité)
        .reduce(calculateTotal, 0); // Utilisation de 'reduce' pour accumuler les prix totaux des éléments et obtenir le total du panier, en utilisant la fonction 'calculateTotal' comme opération de réduction, en commençant par une valeur initiale de 0
}
// Exportation par défaut d'une fonction nommée 'selectCartTotal' qui prend l'état (state) en entrée, calcule le total du panier en utilisant les prix et quantités des éléments, et retourne ce total
