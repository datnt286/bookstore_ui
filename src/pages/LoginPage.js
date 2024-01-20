import { useEffect, useState } from 'react';
import Login from '../components/Login';

function LoginPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return <>{loading ? <div className="loader"></div> : <Login />}</>;
}

export default LoginPage;
