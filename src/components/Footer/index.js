import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

function Footer() {
    return (
        <>
            <Newsletter />
            <footer id="footer">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Về chúng tôi</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <Link to="/lien-he">
                                                <i className="fa fa-map-marker"></i>3/2 TP. HCM
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/lien-he">
                                                <i className="fa fa-phone"></i>+0123456789
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/lien-he">
                                                <i className="fa fa-envelope-o"></i>ddlbookstore@gmail.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Thể loại</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <Link to="/danh-muc/sach-tu-luc">Sách tự lực</Link>
                                        </li>
                                        <li>
                                            <Link to="/danh-muc/truyen-tranh">Truyện tranh</Link>
                                        </li>
                                        <li>
                                            <Link to="/danh-muc/sach-giao-khoa">Sách giáo khoa</Link>
                                        </li>
                                        <li>
                                            <Link to="/sach-moi">Sách mới</Link>
                                        </li>
                                        <li>
                                            <Link to="/combo">Combo</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"></div>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Thông tin</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <Link to="/lien-he">Về chúng tôi</Link>
                                        </li>
                                        <li>
                                            <Link to="/lien-he">Liên hệ</Link>
                                        </li>
                                        <li>
                                            <a href="#">Chính sách bảo mật</a>
                                        </li>
                                        <li>
                                            <a href="#">Hoá đơn và trả hàng</a>
                                        </li>
                                        <li>
                                            <a href="#">Điều khoản và điều kiện</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Dịch vụ</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">Tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#">Giỏ hàng</a>
                                        </li>
                                        <li>
                                            <a href="#">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="#">Theo dõi đơn hàng</a>
                                        </li>
                                        <li>
                                            <a href="#">Trợ giúp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="bottom-footer" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className="copyright">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with
                                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
                                    <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                                        Colorlib
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
