function NewSletter() {
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
                                    className="input"
                                    type="email"
                                    placeholder="Nhập email của bạn"
                                />
                                <button id="newsletter-btn" className="newsletter-btn">
                                    <i className="fa fa-envelope"></i> Đăng ký
                                </button>
                            </form>
                            <ul className="newsletter-follow">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSletter;
