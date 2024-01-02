import { useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';

function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist);

    return (
        <div className="section">
            <div className="container">
                {wishlist.length > 0 ? (
                    <>
                        <div className="section-title d-flex justify-content-between">
                            <h3 className="title">Wishlist</h3>
                        </div>
                        <ProductGrid />
                    </>
                ) : (
                    <h2>Bạn chưa thêm sản phẩm vào wishlist</h2>
                )}
            </div>
        </div>
    );
}

export default Wishlist;
