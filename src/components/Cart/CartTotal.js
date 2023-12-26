import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartTotal() {
    const total = useSelector((state) => state.cart.total);

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <h2>Mã giảm giá</h2>
                <div>
                    <input className="coupon-input" placeholder="Nhập mã giảm giá" />
                    <button className="btn-coupon">Áp dụng mã</button>
                </div>
            </div>

            <div className="col-md-6">
                <div className="cart-total">
                    <h3>Tổng hoá đơn</h3>
                    <div className="d-flex justify-content-between my-5">
                        <span className="cart-price-label">Tổng phụ</span>
                        <span className="cart-price">{total} ₫</span>
                    </div>
                    <div className="d-flex justify-content-between my-5">
                        <span className="cart-price-label">Tổng tiền</span>
                        <span className="cart-price">{total} ₫</span>
                    </div>
                    <Link to="/thanh-toan">
                        <button className="btn-proceed-checkout">Tiến hành thanh toán</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
