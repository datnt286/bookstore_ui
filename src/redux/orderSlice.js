import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        ordered: [],
        confirmed: [],
        delivering: [],
        delivered: [],
        canceled: [],
        orderDetails: [],
    },
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setOrdered: (state, action) => {
            state.ordered = action.payload;
        },
        setConfirmed: (state, action) => {
            state.confirmed = action.payload;
        },
        setDelivering: (state, action) => {
            state.delivering = action.payload;
        },
        setDelivered: (state, action) => {
            state.delivered = action.payload;
        },
        setCanceled: (state, action) => {
            state.canceled = action.payload;
        },
        setOrderDetails: (state, action) => {
            state.orderDetails = action.payload;
        },
    },
});

export const { setOrders, setOrdered, setConfirmed, setDelivering, setDelivered, setCanceled, setOrderDetails } =
    orderSlice.actions;

export default orderSlice.reducer;
