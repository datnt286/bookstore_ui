import { configureStore } from '@reduxjs/toolkit';
import { localStorageMiddleware } from './localStorageMiddleware';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
