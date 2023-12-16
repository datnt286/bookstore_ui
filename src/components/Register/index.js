function Register() {
    return (
        <div id="register" className="section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="section-title text-center">
                            <h3 className="title">Đăng ký</h3>
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="username" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="password" name="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="password" name="password" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="phone" placeholder="Điện thoại" />
                        </div>
                        <div className="input-checkbox my-4">
                            <input type="checkbox" id="terms" />
                            <label for="terms">
                                <span></span>
                                Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                            </label>
                        </div>
                        <div className="text-center my-4">
                            <button className="primary-btn w-100">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
