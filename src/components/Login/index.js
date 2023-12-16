function Login() {
    return (
        <div id="login" className="section">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="section-title text-center">
                            <h3 className="title">Đăng nhập</h3>
                        </div>
                        <div className="form-group">
                            <input className="input" type="text" name="username" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="password" name="password" placeholder="Mật khẩu" />
                        </div>
                        <div className="text-center my-4">
                            <button className="primary-btn w-100">Đăng nhập</button>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn-facebook w-100">Đăng nhập Facebook</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn-google w-100">Đăng nhập Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
