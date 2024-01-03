import { createSlice } from '@reduxjs/toolkit';

const orderDetailSlice = createSlice({
    name: 'orderDetail',
    initialState: [],
    reducers: {
        setOrderDetails: (state, action) => {
            return action.payload;
        },
    },
});

export const { setOrderDetails } = orderDetailSlice.actions;

export default orderDetailSlice.reducer;
