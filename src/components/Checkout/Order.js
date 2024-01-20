import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Order({ setValidationErrors }) {
    const user = useSelector((state) => state.auth.user);
    const cart = useSelector((state) => state.cart);
    const [paymentMethod, setPaymentMethod] = useState(2);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialOptions = {
        clientId: 'Af8dbnEB_JRx87dbcb-HrO67XOlUz1uvMs18JgrzZHqYEWGs49ZgjX-JCR4kp8M_tQSF396z8vHuZr_J',
        currency: 'USD',
        vault: true,
    };

    function handleApprove() {
        handleOrder();
    }

    const handlePaymentChange = (event) => {
        setPaymentMethod(parseInt(event.target.value));
    };

    const handleOrder = async () => {
        try {
            const data = {
                user: {
                    ...user,
                    customer_id: user.id || null,
                },
                products: cart.items,
                payment_method: paymentMethod,
                payment_status: paymentMethod === 1 ? 0 : 1,
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
            if (error.response.status === 422) {
                setValidationErrors({
                    name: error.response.data.errors.name || [],
                    phone: error.response.data.errors.phone || [],
                    address: error.response.data.errors.address || [],
                });
            } else {
                console.error('Lỗi: ', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Có lỗi xảy ra khi thanh toán. Vui lòng thử lại sau!',
                    timer: 2000,
                });
            }
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
                                <div>
                                    {(parseInt(product.quantity) * parseInt(product.price)).toLocaleString('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </div>
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
                        <strong className="order-total">
                            {cart.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </strong>
                    </div>
                </div>
            </div>
            <div className="payment-method">
                <div className="input-radio">
                    <input
                        type="radio"
                        name="payment"
                        id="payment-2"
                        value={2}
                        checked={paymentMethod === 2}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-2">
                        <span></span>
                        Thanh toán khi nhận hàng
                    </label>
                    <div className="caption">
                        <p>Thanh toán ngay khi nhận hàng.</p>
                    </div>
                </div>
                <div className="input-radio">
                    <input
                        type="radio"
                        name="payment"
                        id="payment-1"
                        value={1}
                        checked={paymentMethod === 1}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-1">
                        <span></span>
                        Thanh toán Paypal
                    </label>
                    <div className="caption">
                        <PayPalScriptProvider deferLoading={false} options={initialOptions}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        intent: 'CAPTURE',
                                        application_context: {
                                            brand_name: 'Bookstore',
                                            shipping_preference: 'NO_SHIPPING',
                                        },
                                        purchase_units: [
                                            {
                                                description: 'Supcription',
                                                amount: {
                                                    value: parseFloat((cart.total / 24500).toFixed(2)),
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={handleApprove}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>
            <button onClick={handleOrder} className="primary-btn order-submit w-100">
                Đặt hàng
            </button>
        </div>
    );
}

export default Order;
