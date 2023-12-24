import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/authSlice';
import Swal from 'sweetalert2';

function TopHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        setIsLoggedIn(false);

        Swal.fire({
            icon: 'success',
            title: 'Đăng xuất thành công!',
            timer: 2000,
        });
    };

    return (
        <div id="top-header">
            <div className="container">
                <ul className="header-links pull-left">
                    <li>
                        <a href="#">
                            <i className="fa fa-phone"></i> +0123456789
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-envelope-o"></i> email@email.com
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-map-marker"></i> TP. HCM
                        </a>
                    </li>
                </ul>
                {isLoggedIn ? (
                    <ul className="header-links pull-right">
                        <li>
                            <NavLink to="/me">
                                <i className="fa fa-user-o"></i> {user.name}
                            </NavLink>
                        </li>
                        <li onClick={handleLogout}>
                            <NavLink to="/">
                                <i className="fa fa-sign-out"></i> Đăng xuất
                            </NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul className="header-links pull-right">
                        <li>
                            <NavLink to="/register">
                                <i className="fa fa-pencil-square-o"></i> Đăng ký
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                <i className="fa fa-sign-in"></i> Đăng nhập
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TopHeader;
