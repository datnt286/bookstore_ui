function BillingDetail() {
    return (
        <div className="col-md-7">
            <div className="billing-details">
                <div className="section-title">
                    <h3 className="title">Chi tiết người nhận</h3>
                </div>
                <div className="form-group">
                    <input className="input" type="text" name="name" placeholder="Tên" />
                </div>
                <div className="form-group">
                    <input className="input" type="tel" name="tel" placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                    <input className="input" type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <textarea className="input" type="text" name="address" placeholder="Địa chỉ"></textarea>
                </div>
                <div className="form-group">
                    <div className="input-checkbox">
                        <input type="checkbox" id="create-account" />
                        <label htmlFor="create-account">
                            <span></span>
                            Tạo tài khoản?
                        </label>
                        <div className="caption">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                            <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shiping-details">
                <div className="section-title">
                    <h3 className="title">Địa chỉ giao hàng</h3>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label htmlFor="shiping-address">
                        <span></span>
                        Giao tới một địa chỉ khác?
                    </label>
                    <div className="caption">
                        <div className="form-group">
                            <input className="input" type="text" name="name" placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="tel" name="tel" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="input" type="text" name="address" placeholder="Địa chỉ"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-notes">
                <textarea className="input" placeholder="Ghi chú"></textarea>
            </div>
        </div>
    );
}

export default BillingDetail;
