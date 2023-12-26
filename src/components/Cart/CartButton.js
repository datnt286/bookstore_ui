import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';

function CartButton() {
    const dispatch = useDispatch();

    const handleUpdateCart = () => {
        dispatch(updateCart());

        Swal.fire({
            icon: 'success',
            title: 'Cập nhật giỏ hàng thành công!',
            timer: 2000,
        });
    };

    return (
        <div className="d-flex justify-content-between">
            <Link to="/">
                <button className="btn-cart">Tiếp tục mua sắm</button>
            </Link>

            <button onClick={handleUpdateCart} className="btn-cart">
                Cập nhật giỏ hàng
            </button>
        </div>
    );
}

export default CartButton;
