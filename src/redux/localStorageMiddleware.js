export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    switch (action.type) {
        case 'auth/logout':
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            break;
        case 'cart/addToCart':
        case 'cart/updateCart':
            localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
            break;
        case 'cart/clearCart':
            localStorage.removeItem('cart');
            break;
        default:
            break;
    }

    return result;
};
