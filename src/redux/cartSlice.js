import { createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: cart,
        total: calculateTotal(cart),
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProductIndex = state.items.findIndex((product) => product.slug === action.payload.slug);

            if (existingProductIndex !== -1) {
                state.items[existingProductIndex].quantity += action.payload.quantity;
            } else {
                state.items = [...state.items, action.payload];
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((product) => product.slug !== action.payload);
        },
        updateAmount: (state, action) => {
            const { slug, quantity } = action.payload;
            const product = state.items.find((product) => product.slug === slug);

            if (product) {
                product.quantity = quantity;
            }
        },
        updateTotal: (state) => {
            state.total = calculateTotal(state.items);
        },
        updateCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
    },
});

function calculateTotal(items) {
    return items.reduce((total, product) => total + product.quantity * product.price, 0);
}

export const { addToCart, removeFromCart, updateAmount, updateTotal, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
