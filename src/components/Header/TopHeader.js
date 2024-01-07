import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function TopHeader() {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());

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
                            <i className="fa fa-envelope-o"></i> ddlbookstore@gmail.com
                        </Link>
                    </li>
                    <li>
                        <Link to="/lien-he">
                            <i className="fa fa-map-marker"></i> 3/2 TP. HCM
                        </Link>
                    </li>
                </ul>
                {isLoggedIn ? (
                    <ul className="header-links pull-right">
                        <li>
                            <Link to="/hoa-don">
                                <i className="fa fa-truck"></i> Hoá đơn
                            </Link>
                        </li>
                        <li>
                            <Link to="/tai-khoan">
                                <img src={user.avatar_image} alt="Ảnh đại diện" className="avatar-img-header" />
                                {user.name}
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
