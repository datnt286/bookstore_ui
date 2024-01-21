import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductWidget({ data }) {
    const dispatch = useDispatch();

    const handleDelete = (slug) => {
        dispatch(removeFromCart(slug));
    };

    return (
        <div className="product-widget">
            <Link to={`/san-pham/${data.slug}`}>
                <div className="product-img">
                    <img src={data.image_path} alt="Hình ảnh" />
                </div>
            </Link>

            <div className="product-body">
                <h3 className="product-name">
                    <Link to={`/san-pham/${data.slug}`}>{data.name}</Link>
                </h3>
                <h4 className="product-price">
                    <span className="qty">{data.quantity} x</span>
                    {data.price.toLocaleString() + ' ₫'}
                </h4>
            </div>

            <button onClick={() => handleDelete(data.slug)} className="delete">
                <i className="fa fa-close"></i>
            </button>
        </div>
    );
}

export default ProductWidget;
