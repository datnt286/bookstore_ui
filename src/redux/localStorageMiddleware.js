export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    switch (action.type) {
        case 'auth/loginSuccess':
            const { user, token } = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(user));
            break;
        case 'auth/logout':
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            break;
        case 'cart/updateUser':
            localStorage.setItem('userData', JSON.stringify(action.payload.userData));
            break;
        case 'cart/addToCart':
        case 'cart/updateAmount':
        case 'cart/updateCart':
        case 'cart/removeFromCart':
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
