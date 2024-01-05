export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    switch (action.type) {
        // Auth Slice
        case 'auth/login':
            const { user, token } = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('userData', JSON.stringify(user));
            break;
        case 'auth/logout':
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            break;
        case 'auth/updateUser':
            localStorage.setItem('userData', JSON.stringify(action.payload.userData));
            break;

        // Cart Slice
        case 'cart/addToCart':
        case 'cart/removeFromCart':
        case 'cart/updateQuantity':
            localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
            break;
        case 'cart/clearCart':
            localStorage.removeItem('cart');
            break;

        // Wishlist Slice
        case 'wishlist/addToWishlist':
        case 'wishlist/removeFromWishlist':
            localStorage.setItem('wishlist', JSON.stringify(store.getState().wishlist));
            break;
        default:
            break;
    }

    return result;
};
