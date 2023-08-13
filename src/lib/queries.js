import { gql } from "@apollo/client"; // Importation de la fonction gql depuis le module @apollo/client pour définir des requêtes GraphQL

// Définition de la requête GraphQL GET_PRODUCTS
export const GET_PRODUCTS = gql`
  query($category: String!) {
    products(category: $category) {
      id
      name
      price
      filter
      category
    }
  }
`;
// Cette requête récupère des produits en fonction d'une catégorie spécifiée, avec certains champs (id, name, price, filter, category)

// Définition de la mutation GraphQL ADD_ORDER
export const ADD_ORDER = gql`
  mutation($id: ID, $ownerId: String!, $date: String!, $pickupDate: String!, $clientDetails: String!, $total: Float!, $items: [ProductInput]) {
    addOrder(id: $id, ownerId: $ownerId, date: $date, pickupDate: $pickupDate, clientDetails: $clientDetails, total: $total, items: $items) {
      clientDetails
      items {
        name
      }
    }
  }
`;
// Cette mutation ajoute une commande avec des détails spécifiés, tels que id, ownerId, date, pickupDate, clientDetails, total, et items

// Définition de la requête GraphQL GET_ORDERS
export const GET_ORDERS = gql`
  query($ownerId: String!) {
    orders(ownerId: $ownerId) {
      id
      date
      items {
        name
      }
    }
  }
`;
// Cette requête récupère des commandes en fonction de l'identifiant du propriétaire, avec certains champs (id, date, items)
