import {createContext, useContext, useEffect, useState} from "react";
import {AddOrder, getFromCache, saveInCache} from "../../lib/queries.js";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({children}) {
    const [cart, setCart] = useState(getFromCache("cart") || []);
    const [total, setTotal] = useState(0);

    const computeTotal = (previousTotal, item) => previousTotal + item.price;

    useEffect(function () {
        const total = cart.reduce(computeTotal, 0);
        setTotal(total);
        saveInCache("cart", cart);
    }, [cart]);

    function updateCart(item) {
        setCart([...cart, item]);
    }

    function removeFromCart(index) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, total, updateCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}