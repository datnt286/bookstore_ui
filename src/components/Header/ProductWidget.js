import { useDispatch } from 'react-redux';
import { removeFromCart, updateTotal } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductWidget({ data }) {
    const dispatch = useDispatch();

    const handleDelete = (slug) => {
        dispatch(removeFromCart(slug));
        dispatch(updateTotal());
    };

    return (
        <div className="product-widget">
            <Link to={`/${data.slug}`}>
                <div className="product-img">
                    <img src={data.image} alt="Hình ảnh" />
                </div>
            </Link>

            <div className="product-body">
                <h3 className="product-name">
                    <Link to={`/${data.slug}`}>{data.name}</Link>
                </h3>
                <h4 className="product-price">
                    <span className="qty">{data.quantity}x</span>
                    {data.price} ₫
                </h4>
            </div>

            <button onClick={() => handleDelete(data.slug)} className="delete">
                <i className="fa fa-close"></i>
            </button>
        </div>
    );
}

export default ProductWidget;
