import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation" className="navbar-expand">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar-nav">
                        <li >
                            <NavLink to="/" className="nav-item" activeClassName="active">
                                <span className="nav-content">Trang chủ</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/danh-muc" className="nav-item" activeClassName="active">
                                <span className="nav-content">Danh mục</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cua-hang" className="nav-item" activeClassName="active">
                                <span className="nav-content">Cửa hàng</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/san-pham-da-xem" className="nav-item" activeClassName="active">
                                <span className="nav-content">Sản phẩm đã xem</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lien-he" className="nav-item" activeClassName="active">
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
