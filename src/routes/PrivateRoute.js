import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);

    return isLoggedIn ? <>{children}</> : <Navigate to="/khong-co-quyen-truy-cap" />;
}

export default PrivateRoute;
