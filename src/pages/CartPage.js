import DefaultLayout from '../layouts/DefaultLayout';
import Cart from '../components/Cart';
import NewSletter from '../components/NewSletter';

function CartPage() {
    return (
        <DefaultLayout>
            <Cart />
            <NewSletter />
        </DefaultLayout>
    );
}

export default CartPage;
