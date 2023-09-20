import {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function computeTotal(previousTotal, item) {
        return previousTotal + item.price * item.quantity;
    }

    useEffect(function () {
        const total = cart.reduce(computeTotal, 0);
        setTotal(total);
    }, [cart]);

    function updateCart(item) {
        setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={{cart, total, updateCart}}>
            {children}
        </CartContext.Provider>
    );
}