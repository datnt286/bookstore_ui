import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateCart } from '../../redux/cartSlice';

function CartButton() {
    const dispatch = useDispatch();

    const handleUpdateCart = () => {
        dispatch(updateCart());
        alert('Cập nhật giỏ hàng thành công!');
    };

    return (
        <div className="d-flex justify-content-between">
            <NavLink to="/">
                <button className="btn-cart">Tiếp tục mua sắm</button>
            </NavLink>

            <button onClick={handleUpdateCart} className="btn-cart">
                Cập nhật giỏ hàng
            </button>
        </div>
    );
}

export default CartButton;
