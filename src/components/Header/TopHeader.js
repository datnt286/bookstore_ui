import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
                        <Link to="/lien-he">
                            <i className="fa fa-phone"></i> +0123456789
                        </Link>
                    </li>
                    <li>
                        <Link to="/lien-he">
                            <i className="fa fa-envelope-o"></i> email@email.com
                        </Link>
                    </li>
                    <li>
                        <Link to="/lien-he">
                            <i className="fa fa-map-marker"></i> TP. HCM
                        </Link>
                    </li>
                </ul>
                {isLoggedIn ? (
                    <ul className="header-links pull-right">
                        <li>
                            <Link to="/tai-khoan">
                                <i className="fa fa-user-o"></i> {user.name}
                            </Link>
                        </li>
                        <li onClick={handleLogout}>
                            <Link to="/">
                                <i className="fa fa-sign-out"></i> Đăng xuất
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="header-links pull-right">
                        <li>
                            <Link to="/dang-ky">
                                <i className="fa fa-pencil-square-o"></i> Đăng ký
                            </Link>
                        </li>
                        <li>
                            <Link to="/dang-nhap">
                                <i className="fa fa-sign-in"></i> Đăng nhập
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default TopHeader;
