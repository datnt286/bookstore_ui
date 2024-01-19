import { Link } from 'react-router-dom';
import NotFoundImage from '../img/not-found.jpg';

function NotFoundPage() {
    return (
        <div className="not-found d-flex justify-content-center align-items-center">
            <div className="not-found-wrapper">
                <img className="not-found-img" src={NotFoundImage} alt="NOT FOUND" />
                <h2 className="mt-4">Không tìm thấy trang</h2>
                <p className="text-center fs-3 mt-4">Trang bạn tìm kiếm không tồn tại!</p>
                <p className="text-center mt-4">
                    Quay lại{' '}
                    <Link to="/" className="not-found-link">
                        Trang chủ
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NotFoundPage;
