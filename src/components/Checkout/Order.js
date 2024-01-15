import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Order() {
    const user = useSelector((state) => state.auth.user);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOrder = async () => {
        try {
            const data = {
                user: {
                    ...user,
                    customer_id: user.id || null,
                },
                products: cart.items,
            };

            const res = await axiosInstance.post('/order/create', data);

            dispatch(clearCart());
            navigate('/hoa-don');

            Swal.fire({
                icon: 'success',
                title: res.message,
                timer: 2000,
            });
        } catch (error) {
            console.error('Lỗi: ', error);

            Swal.fire({
                icon: 'error',
                title: 'Có lỗi xảy ra khi thanh toán. Vui lòng thử lại sau!',
                timer: 2000,
            });
        }
    };

    return (
        <div className="col-md-5 order-details">
            <div className="section-title text-center">
                <h3 className="title">Hoá đơn</h3>
            </div>
            <div className="order-summary">
                <div className="order-col">
                    <div>
                        <strong>Sản phẩm</strong>
                    </div>
                    <div>
                        <strong>Số lượng</strong>
                    </div>
                    <div>
                        <strong>Thành tiền</strong>
                    </div>
                </div>
                <div className="order-products">
                    {cart.items.map((product, index) => {
                        return (
                            <div key={index} className="order-col">
                                <div>{product.name}</div>
                                <div>x {product.quantity}</div>
                                <div>{(parseInt(product.quantity) * parseInt(product.price)).toLocaleString()} ₫</div>
                            </div>
                        );
                    })}
                </div>
                <div className="order-col">
                    <div>
                        <strong>Phí vận chuyển</strong>
                    </div>
                    <div>Miễn phí</div>
                </div>
                <div className="order-col">
                    <div>
                        <strong>Tổng thành tiền</strong>
                    </div>
                    <div>
                        <strong className="order-total">{cart.total.toLocaleString()} ₫</strong>
                    </div>
                </div>
            </div>
            <div className="payment-method">
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-1" />
                    <label htmlFor="payment-1">
                        <span></span>
                        Chuyển khoản trực tiếp
                    </label>
                    <div className="caption">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-2" />
                    <label htmlFor="payment-2">
                        <span></span>
                        Thanh toán séc
                    </label>
                    <div className="caption">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="input-radio">
                    <input type="radio" name="payment" id="payment-3" />
                    <label htmlFor="payment-3">
                        <span></span>
                        Hệ thống Paypal
                    </label>
                    <div className="caption">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="input-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                    <span></span>
                    Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                </label>
            </div>
            <button onClick={handleOrder} className="primary-btn order-submit w-100">
                Đặt hàng
            </button>
        </div>
    );
}

export default Order;
