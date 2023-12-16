function Order() {
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
                        <strong>Thành tiền</strong>
                    </div>
                </div>
                <div className="order-products">
                    <div className="order-col">
                        <div>1x Đắc nhân tâm</div>
                        <div>$980.00</div>
                    </div>
                    <div className="order-col">
                        <div>2x Đắc nhân tâm</div>
                        <div>$980.00</div>
                    </div>
                </div>
                <div className="order-col">
                    <div>Phí vận chuyển</div>
                    <div>
                        <strong>Miễn phí</strong>
                    </div>
                </div>
                <div className="order-col">
                    <div>
                        <strong>Tổng tiền</strong>
                    </div>
                    <div>
                        <strong className="order-total">$2940.00</strong>
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
            <a href="#" className="primary-btn order-submit">
                Đặt hàng
            </a>
        </div>
    );
}

export default Order;
