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
        confirmOrder: (state, action) => {
            const orderId = action.payload;

            const updatedOrders = state.orders.map((order) => (order.id === orderId ? { ...order, status: 2 } : order));

            state.orders = updatedOrders;
        },

        cancelOrder: (state, action) => {
            const orderId = action.payload;

            const updatedOrders = state.orders.map((order) => (order.id === orderId ? { ...order, status: 5 } : order));

            state.orders = updatedOrders;
        },
    },
});

export const {
    setOrders,
    setOrdered,
    setConfirmed,
    setDelivering,
    setDelivered,
    setCanceled,
    setOrderDetails,
    confirmOrder,
    cancelOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
