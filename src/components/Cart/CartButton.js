import { NavLink } from 'react-router-dom';

function CartButton() {
    return (
        <div className="d-flex justify-content-between">
            <NavLink to="/">
                <btn className="btn-cart">
                    Tiếp tục mua sắm
                </btn>
            </NavLink>

            <btn className="btn-cart">Cập nhật giỏ hàng</btn>
        </div>
    );
}

export default CartButton;
