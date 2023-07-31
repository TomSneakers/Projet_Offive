function calculateTotal(num1, num2) {
    return num1 + num2;
}

function selectItems(state) {
    if (!state.hasOwnProperty('items')) {
        return [];
    }
    return state.items;
}

export default function selectCartTotal(state) {
    return selectItems(state).map((item) => item.price * item.quantity).reduce(calculateTotal, 0);
}
