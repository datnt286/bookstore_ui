import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Checkout from '../components/Checkout';

function CheckoutPage() {
    const cart = useSelector((state) => state.cart.items || []);

    return cart.length > 0 ? (
        <DefaultLayout>
            <Checkout />
        </DefaultLayout>
    ) : (
        <Navigate to="/" />
    );
}

export default CheckoutPage;
