import { Link } from 'react-router-dom';
import ForbiddenImage from '../img/403-forbidden.jpg';

function ForbiddenPage() {
    return (
        <div className="forbidden d-flex justify-content-center align-items-center">
            <div>
                <div className="text-center">
                    <img className="forbidden-img" src={ForbiddenImage} alt="FORBIDDEN" />
                </div>
                <h2 className="mt-4">Bạn không có quyền truy cập trang này!</h2>
                <p className="text-center fs-3 mt-5">Vui lòng đăng nhập để có quyền truy cập.</p>
                <div className="d-flex justify-content-between forbidden-btn">
                    <Link to="/dang-nhap" className="forbidden-link mt-4">
                        Đăng nhập
                    </Link>

                    <span className="text-center mt-4">
                        Quay lại{' '}
                        <Link to="/" className="forbidden-link">
                            Trang chủ
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ForbiddenPage;
