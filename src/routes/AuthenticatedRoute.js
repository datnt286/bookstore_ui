import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AuthenticatedRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);

    return isLoggedIn ? <Navigate to="/" /> : <>{children}</>;
}

export default AuthenticatedRoute;
