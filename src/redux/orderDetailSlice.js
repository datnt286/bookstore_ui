import { createSlice } from '@reduxjs/toolkit';

const orderDetailSlice = createSlice({
    name: 'orderDetail',
    initialState: {
        items: [],
        status: null,
    },
    reducers: {
        setOrderDetails: (state, action) => {
            state.items = action.payload.items || [];
            state.status = action.payload.status || null;
        },
    },
});

export const { setOrderDetails } = orderDetailSlice.actions;

export default orderDetailSlice.reducer;
