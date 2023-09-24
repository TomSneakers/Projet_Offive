import { gql } from "@apollo/client";

// Définition de la requête GraphQL GET_ORDERS
export async function GET_ORDERS() {
  const result = await fetch("http://localhost:2023/orders", { method: "get" });
  return result.json();
}

export async function AddOrder(order) {
  const result = await fetch("http://localhost:2023/orders", {
    method: "post",
    body: JSON.stringify({...order}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
}

export function saveInCache(name, value){
  localStorage.setItem(name, JSON.stringify(value));
}

export function getFromCache(name){
  return JSON.parse(localStorage.getItem(name));
}

// Cette requête récupère des commandes en fonction de l'identifiant du propriétaire, avec certains champs (id, date, items)
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

async function getAllProducts() {
  const result = await fetch("http://localhost:2023/products", { method: "get" });
  return result.json();
}

async function getProducts(category) {
  const result = await fetch(`http://localhost:2023/products/${category}`, { method: "get" });
  return result.json();
}


export const service = {
  getAllProducts,
  getProducts,
}