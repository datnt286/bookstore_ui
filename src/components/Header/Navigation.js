import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation" className="navbar-expand">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar-nav">
                        <li className="active">
                            <NavLink to="/">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category">Danh mục</NavLink>
                        </li>
                        <li>
                            <NavLink to="/store">Cửa hàng</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Liên hệ</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
