import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { removeFromWishlist } from '../../redux/wishlistSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProductCard({ data }) {
    const dispatch = useDispatch();
    let absolute_path;

    if (!data || !data.absolute_path) {
        if (!data || !data.images || data.images.length === 0) {
            return null;
        }

        ({ absolute_path } = data.images[0] || {});
    }

    const product = {
        ...data,
        quantity: 1,
        image: data.absolute_path || (data.images && data.images.length > 0 ? data.images[0].absolute_path : null),
        ...(data.is_combo ? { combo_id: data.id, book_id: null } : { book_id: data.id, combo_id: null }),
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        Swal.fire({
            icon: 'success',
            title: 'Thêm vào giỏ hàng thành công!',
            timer: 2000,
        });
    };

    const handleDelete = (slug) => {
        dispatch(removeFromWishlist(slug));

        Swal.fire({
            icon: 'success',
            title: 'Xoá khỏi Wishlist thành công!',
            timer: 2000,
        });
    };

    return (
        <div className="col-md-3 col-xs-6">
            <div className="product">
                <Link to={`/${data.slug}`}>
                    <div className="product-img d-flex justify-content-center align-items-center">
                        <img
                            src={data.absolute_path || absolute_path}
                            alt={data.name || 'Hình ảnh'}
                            className="product-image"
                        />
                    </div>

                    <div className="product-body">
                        <p className="product-category">{data.category_name}</p>
                        <h3 className="product-name">{data.name}</h3>
                        <h4 className="product-price">
                            {data.price} ₫ <del className="product-old-price">990.00 ₫</del>
                        </h4>
                    </div>
                </Link>

                <div class="add-to-cart">
                    <button onClick={handleAddToCart} class="add-to-cart-btn">
                        <i className="fa fa-heart-o"></i> Thêm vào giỏ hàng
                    </button>
                </div>

                <button onClick={() => handleDelete(data.slug)} className="btn-delete-wishlist">
                    <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
