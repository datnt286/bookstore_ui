import { NavLink } from 'react-router-dom';
import TopHeader from './TopHeader';
import Logo from '../../img/logo.png'

function MainHeader() {
    return (
        <header>
            <TopHeader />

            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="header-logo">
                                <NavLink to="/" className="logo">
                                    <img src={Logo} alt="Logo" />
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="header-search" className="header-search">
                                <form>
                                    <input id="search-input" className="input" placeholder="Nhập từ khoá..." />
                                    <button id="search-btn" className="search-btn">
                                        Tìm kiếm
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-3 clearfix">
                            <div className="header-ctn">
                                <div>
                                    <a href="#">
                                        <i className="fa fa-heart-o"></i>
                                        <span>Wishlist</span>
                                        <div className="qty">2</div>
                                    </a>
                                </div>

                                <div className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>Giỏ hàng</span>
                                        <div className="qty">3</div>
                                    </a>
                                    <div className="cart-dropdown">
                                        <div className="cart-list">
                                            <div className="product-widget">
                                                <div className="product-img">
                                                    <img src="./img/product01.png" alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-name">
                                                        <a href="#">product name goes here</a>
                                                    </h3>
                                                    <h4 className="product-price">
                                                        <span className="qty">1x</span>$980.00
                                                    </h4>
                                                </div>
                                                <button className="delete">
                                                    <i className="fa fa-close"></i>
                                                </button>
                                            </div>

                                            <div className="product-widget">
                                                <div className="product-img">
                                                    <img src="./img/product02.png" alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-name">
                                                        <a href="#">product name goes here</a>
                                                    </h3>
                                                    <h4 className="product-price">
                                                        <span className="qty">3x</span>$980.00
                                                    </h4>
                                                </div>
                                                <button className="delete">
                                                    <i className="fa fa-close"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-summary">
                                            <small>3 Item(s) selected</small>
                                            <h5>SUBTOTAL: $2940.00</h5>
                                        </div>
                                        <div className="cart-btns">
                                            <NavLink to="/cart">Xem giỏ hàng</NavLink>
                                            <NavLink to="/checkout">
                                                Thanh toán <i className="fa fa-arrow-circle-right"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="menu-toggle">
                                    <a href="#">
                                        <i className="fa fa-bars"></i>
                                        <span>Menu</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
