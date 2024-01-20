import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function CartRow({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [amount, setAmount] = useState(parseInt(product.price) * parseInt(product.quantity));
    const [productQuantity, setProductQuantity] = useState(null);
    const [loadingQuantity, setLoadingQuantity] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setAmount(parseInt(product.price) * parseInt(quantity));
        dispatch(updateQuantity({ slug: product.slug, quantity }));
    }, [product.price, quantity, dispatch, product.slug]);

    useEffect(() => {
        const fetchProductQuantity = async () => {
            try {
                const res = await axiosInstance.get(`/${product.slug}`);
                setProductQuantity(res.data.quantity);
                setLoadingQuantity(false);
            } catch (error) {
                console.error('Lỗi :', error);
            }
        };

        if (productQuantity === null) {
            fetchProductQuantity();
        }
    }, [product.slug, productQuantity]);

    const handleQuantityChange = (value) => {
        if (loadingQuantity) {
            return;
        }

        const newQuantity = Math.max(1, quantity + value);

        if (newQuantity > productQuantity) {
            Swal.fire({
                icon: 'error',
                title: 'Số lượng sản phẩm không đủ!',
                timer: 2000,
            });
            return;
        }

        setQuantity(newQuantity);
    };

    const handleQuantityInputChange = (event) => {
        if (loadingQuantity) {
            return;
        }

        const value = parseInt(event.target.value);

        if (isNaN(value) || value < 0) {
            return;
        }

        const newQuantity = Math.max(1, value);

        if (newQuantity > productQuantity) {
            Swal.fire({
                icon: 'error',
                title: 'Số lượng sản phẩm không đủ!',
                timer: 2000,
            });
            return;
        }

        setQuantity(newQuantity);
    };

    const handleDelete = (slug) => {
        dispatch(removeFromCart(slug));

        Swal.fire({
            icon: 'success',
            title: 'Xoá khỏi giỏ hàng thành công!',
            timer: 2000,
        });
    };

    return (
        <tr>
            <td>
                <Link to={`/san-pham/${product.slug}`}>
                    <img src={product.image_path} alt="Hình ảnh" className="product-cart-image" />
                    <span className="cart-detail mx-2">{product.name}</span>
                </Link>
            </td>
            <td className="cart-detail align-middle">
                {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </td>
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
                <span>{amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            </td>
            <td className="cart-detail align-middle">
                <button onClick={() => handleDelete(product.slug)} className="btn-delete">
                    Xoá
                </button>
            </td>
        </tr>
    );
}

export default CartRow;
