import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.token);

    return isLoggedIn ? <>{children}</> : <Navigate to="/dang-nhap" />;
}

export default PrivateRoute;
