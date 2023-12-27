import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';
import Wishlist from '../components/Wishlist';

function WishlistPage() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    return (
        <DefaultLayout>
            <Wishlist title="Wishlist" data={wishlist} />
        </DefaultLayout>
    );
}

export default WishlistPage;
