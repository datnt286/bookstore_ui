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
                            <NavLink to="/danh-muc">Danh mục</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cua-hang">Cửa hàng</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lien-he">Liên hệ</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
