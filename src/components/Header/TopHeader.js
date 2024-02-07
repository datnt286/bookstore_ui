import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function TopHeader() {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn đăng xuất?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Huỷ',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout());
                navigate('/');

                Swal.fire({
                    title: 'Đăng xuất thành công!',
                    icon: 'success',
                    timer: 2000,
                });
            }
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
                                <img src={user.avatar_path} alt="Ảnh đại diện" className="avatar-img-header" />
                                {user.name || 'Bạn'}
                            </Link>
                        </li>
                        <li onClick={handleLogout}>
                            <span className="logout-link">
                                <i className="fa fa-sign-out"></i> Đăng xuất
                            </span>
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
