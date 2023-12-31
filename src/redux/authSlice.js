import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('userData')) || null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        updateUser: () => {},
        updateUserBill: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { login, logout, updateUser, updateUserBill } = authSlice.actions;

export default authSlice.reducer;
