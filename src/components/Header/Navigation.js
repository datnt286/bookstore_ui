import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation" className="navbar-expand">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active">
                                <span className="nav-content">Trang chủ</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/danh-muc" activeClassName="active">
                                <span className="nav-content">Danh mục</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cua-hang" activeClassName="active">
                                <span className="nav-content">Cửa hàng</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/san-pham-da-xem" activeClassName="active">
                                <span className="nav-content">Sản phẩm đã xem</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lien-he" activeClassName="active">
                                <span className="nav-content">Liên hệ</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
