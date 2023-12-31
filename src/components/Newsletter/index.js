function Newsletter() {
    return (
        <div id="newsletter" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="newsletter">
                            <p>
                                <strong>Đăng ký</strong> để nhận những thông báo mới
                            </p>
                            <form>
                                <input
                                    id="newsletter-input"
                                    className="form-control input"
                                    type="email"
                                    placeholder="Nhập email của bạn"
                                />
                                <button id="newsletter-btn" className="newsletter-btn">
                                    <i className="fa fa-envelope"></i> Đăng ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
