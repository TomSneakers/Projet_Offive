function calculateTotal(num1, num2) {
    return num1 + num2;
}

const selectItems = (state) => state.cart.items
export default function selectCartTotal(state) {
    return selectItems(state).map((item) => item.price * item.quantity).reduce(calculateTotal, 0);
}
