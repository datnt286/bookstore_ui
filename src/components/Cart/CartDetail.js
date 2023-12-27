import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, updateTotal } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartDetail({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [amount, setAmount] = useState(parseInt(product.price) * parseInt(product.quantity));
    const dispatch = useDispatch();

    useEffect(() => {
        setAmount(parseInt(product.price) * parseInt(quantity));
        dispatch(updateQuantity({ slug: product.slug, quantity }));
        dispatch(updateTotal());
    }, [product.price, quantity, dispatch, product.slug]);

    const handleQuantityChange = (value) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + value));
    };

    const handleQuantityInputChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(isNaN(value) ? 0 : Math.max(1, value));
    };

    const handleDelete = (slug) => {
        dispatch(removeFromCart(slug));
        dispatch(updateTotal());
    };

    return (
        <tr>
            <td>
                <Link to={`/${product.slug}`}>
                    <img src={product.image} alt={`/${product.name}`} className="product-cart-image" />
                </Link>
                <Link to={`/${product.slug}`}>
                    <span className="cart-detail mx-2">{product.name}</span>
                </Link>
            </td>
            <td className="cart-detail align-middle">{product.price} ₫</td>
            <td className="align-middle">
                <button onClick={() => handleQuantityChange(-1)} className="btn-quantity">
                    -
                </button>
                <input
                    type="text"
                    value={quantity}
                    onChange={handleQuantityInputChange}
                    className="form-control quantity-input align-middle"
                />
                <button onClick={() => handleQuantityChange(1)} className="btn-quantity">
                    +
                </button>
            </td>
            <td className="cart-detail align-middle">
                <span>{amount} ₫</span>
            </td>
            <td className="cart-detail align-middle">
                <button onClick={() => handleDelete(product.slug)} className="btn-delete">
                    Xoá
                </button>
            </td>
        </tr>
    );
}

export default CartDetail;
