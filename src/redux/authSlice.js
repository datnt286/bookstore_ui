import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('userData')) || null,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.token = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
        },
        updateUser: () => {},
        updateUserBill: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { loginSuccess, loginFailure, logout, updateUser, updateUserBill } = authSlice.actions;

export default authSlice.reducer;
