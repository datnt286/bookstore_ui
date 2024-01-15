import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
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
        updateUser: (state, action) => {
            state.user = { ...action.payload.newUser };
        },
        updateUserBill: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { login, logout, updateUser, updateUserBill } = authSlice.actions;

export default authSlice.reducer;
