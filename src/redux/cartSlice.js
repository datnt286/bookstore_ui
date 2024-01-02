import { createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function calculateTotal(items) {
    return items.reduce((total, product) => total + product.quantity * product.price, 0);
}

function updateTotal(state) {
    state.total = calculateTotal(state.items || []);
}

const cartSlice = createSlice({
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

            updateTotal(state);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((product) => product.slug !== action.payload);
            updateTotal(state);
        },
        updateQuantity: (state, action) => {
            const { slug, quantity } = action.payload;
            const product = state.items.find((product) => product.slug === slug);

            if (product) {
                product.quantity = isNaN(quantity) ? 0 : quantity;
            }

            updateTotal(state);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
