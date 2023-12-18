import { NavLink } from 'react-router-dom';

function CartButton() {
    return (
        <div className="d-flex justify-content-between">
            <NavLink to="/">
                <button className="btn-cart">Tiếp tục mua sắm</button>
            </NavLink>

            <button className="btn-cart">Cập nhật giỏ hàng</button>
        </div>
    );
}

export default CartButton;
