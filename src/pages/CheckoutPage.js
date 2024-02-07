import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Checkout from '../components/Checkout';

function CheckoutPage() {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const cart = useSelector((state) => state.cart.items || []);

    if (cart.length < 1) {
        return <Navigate to="/gio-hang" />;
    }

    if (!isLoggedIn) {
        return <Navigate to="/dang-nhap" />;
    }

    return (
        <DefaultLayout>
            <Checkout />
        </DefaultLayout>
    );
}

export default CheckoutPage;
