import {gql} from "@apollo/client";

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


async function getAllProducts(){
    const result = await fetch("http://localhost:2023/products", {method: "get"});
    return result.json();
}

async function getProducts(category){
    const result = await fetch(`http://localhost:2023/products/${category}`, {method: "get"});
    return result.json();
}

export const service = {
    getAllProducts,
    getProducts
}