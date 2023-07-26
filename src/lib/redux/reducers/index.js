import { createStore } from "redux"
// import { configureStore } from "@reduxjs/toolkit"

function reducer(state = { items: [] }, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return state;
        default: return state
    }
}


export function addToCart(item) {
    return {
        type: "ADD_TO_CART",
        payload: { item }
    }
}
export const store = createStore(reducer)
// export const store = configureStore(reducer);