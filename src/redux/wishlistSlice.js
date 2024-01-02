import { createSlice } from '@reduxjs/toolkit';

const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: wishlist,
    reducers: {
        addToWishlist: (state, action) => {
            const existingProductIndex = state.findIndex((product) => product.slug === action.payload.slug);

            if (existingProductIndex === -1) {
                return [...state, action.payload];
            }
        },
        removeFromWishlist: (state, action) => {
            return state.filter((product) => product.slug !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
