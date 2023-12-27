import { useDispatch } from 'react-redux';
import { removeFromCart, updateTotal } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductWidget({ product }) {
    const dispatch = useDispatch();

    const handleDelete = (slug) => {
        dispatch(removeFromCart(slug));
        dispatch(updateTotal());
    };

    return (
        <div className="product-widget">
            <Link to={`/${product.slug}`}>
                <div className="product-img">
                    <img src={product.image} alt="Hình ảnh" />
                </div>
            </Link>

            <div className="product-body">
                <h3 className="product-name">
                    <Link to={`/${product.slug}`}>{product.name}</Link>
                </h3>
                <h4 className="product-price">
                    <span className="qty">{product.quantity}x</span>
                    {product.price} ₫
                </h4>
            </div>

            <button onClick={() => handleDelete(product.slug)} className="delete">
                <i className="fa fa-close"></i>
            </button>
        </div>
    );
}

export default ProductWidget;
