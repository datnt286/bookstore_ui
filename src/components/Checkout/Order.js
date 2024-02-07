import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Order({ setValidationErrors }) {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const cart = useSelector((state) => state.cart);

    const [paymentMethod, setPaymentMethod] = useState(1);
    const [shippingFee, setShippingFee] = useState(15000);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialOptions = {
        clientId: 'Af8dbnEB_JRx87dbcb-HrO67XOlUz1uvMs18JgrzZHqYEWGs49ZgjX-JCR4kp8M_tQSF396z8vHuZr_J',
        currency: 'USD',
        vault: true,
    };

    const handleShippingFeeChange = (event) => {
        setShippingFee(parseInt(event.target.value));
    };

    const handlePaymentChange = (event) => {
        setPaymentMethod(parseInt(event.target.value));
    };

    function handleApprove() {
        handleOrder(2);
    }

    const handleOrder = async (payment_method = 1) => {
        try {
            const data = {
                products: cart.items,
                customer_id: user.id,
                name: user.name,
                phone: user.phone,
                address: user.address,
                shipping_fee: shippingFee,
                payment_method: payment_method,
                payment_status: payment_method === 1 ? 0 : 1,
            };

            const res = await axiosInstance.post('/order/create', data, {
                headers: { Authorization: 'Bearer ' + token },
            });

            dispatch(clearCart());
            navigate('/hoa-don');

            Swal.fire({
                title: res.message,
                icon: 'success',
                timer: 2000,
            });
        } catch (error) {
            if (error.response.status === 422) {
                setValidationErrors(error.response.data.errors);
            } else {
                console.error('Lỗi: ', error);

                Swal.fire({
                    title: 'Có lỗi xảy ra khi thanh toán. Vui lòng thử lại sau!',
                    icon: 'error',
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
                                    {(parseInt(product.quantity) * parseInt(product.price)).toLocaleString() + ' ₫'}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <h5 className="my-4">Chọn khu vực giao hàng</h5>

                    <div className="d-flex justify-content-between">
                        <div className="input-radio">
                            <input
                                type="radio"
                                name="shipping-fee"
                                id="shipping-fee-1"
                                value={15000}
                                checked={shippingFee === 15000}
                                onChange={handleShippingFeeChange}
                            />
                            <label htmlFor="shipping-fee-1">
                                <span></span>
                                Trong khu vực TP. HCM
                            </label>
                        </div>
                        <span>15.000 ₫</span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="input-radio">
                            <input
                                type="radio"
                                name="shipping-fee"
                                id="shipping-fee-2"
                                value={30000}
                                checked={shippingFee === 30000}
                                onChange={handleShippingFeeChange}
                            />

                            <label htmlFor="shipping-fee-2">
                                <span></span>
                                Ngoài khu vực TP. HCM
                            </label>
                        </div>
                        <span>30.000 ₫</span>
                    </div>
                </div>

                <div className="order-col">
                    <div>
                        <strong>Tổng thành tiền</strong>
                    </div>
                    <div>
                        <strong className="order-total">{cart.total.toLocaleString() + ' ₫'}</strong>
                    </div>
                </div>

                <div className="order-col">
                    <div>
                        <strong>Phí vận chuyển</strong>
                    </div>
                    <div>
                        <strong className="fs-2">{shippingFee.toLocaleString() + ' ₫'}</strong>
                    </div>
                </div>

                <div className="order-col">
                    <div>
                        <strong>Tổng thanh toán</strong>
                    </div>
                    <div>
                        <strong className="order-total">{(cart.total + shippingFee).toLocaleString() + ' ₫'}</strong>
                    </div>
                </div>
            </div>
            <div className="payment-method">
                <div className="input-radio">
                    <input
                        type="radio"
                        name="payment"
                        id="payment-1"
                        value="1"
                        checked={paymentMethod === 1}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-1">
                        <span></span>
                        Thanh toán khi nhận hàng
                    </label>
                    <div className="caption">
                        <button onClick={() => handleOrder(1)} className="primary-btn order-submit w-100">
                            Đặt hàng
                        </button>
                    </div>
                </div>
                <div className="input-radio">
                    <input
                        type="radio"
                        name="payment"
                        id="payment-2"
                        value="2"
                        checked={paymentMethod === 2}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="payment-2">
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
        </div>
    );
}

export default Order;
