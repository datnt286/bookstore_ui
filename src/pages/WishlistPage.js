import DefaultLayout from '../layouts/DefaultLayout';
import Wishlist from '../components/Wishlist';

function WishlistPage() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    return (
        <DefaultLayout>
            {wishlist.length > 0 ? (
                <Wishlist title="Wishlist" data={wishlist} />
            ) : (
                <h3 className="title p-5 mx-5">Bạn chưa thêm sản phẩm vào Wishlist!</h3>
            )}
        </DefaultLayout>
    );
}

export default WishlistPage;
