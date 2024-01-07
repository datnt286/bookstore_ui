import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartTotal() {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const total = useSelector((state) => state.cart.total);

    const checkoutLink = isLoggedIn ? '/thanh-toan' : '/dang-nhap';

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <h2>Mã giảm giá</h2>
                <input className="form-control coupon-input" placeholder="Nhập mã giảm giá" />
                <button className="btn-coupon">Áp dụng mã</button>
            </div>

            <div className="col-md-6">
                <div className="cart-total">
                    <h3>Tổng hoá đơn</h3>

                    <div className="d-flex justify-content-between my-5">
                        <span className="cart-price-label">Tổng phụ</span>
                        <span className="cart-price">{total.toLocaleString()} ₫</span>
                    </div>

                    <div className="d-flex justify-content-between my-5">
                        <span className="cart-price-label">Tổng tiền</span>
                        <span className="cart-price">{total.toLocaleString()} ₫</span>
                    </div>

                    <Link to={checkoutLink}>
                        <button className="btn-proceed-checkout">Tiến hành thanh toán</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
