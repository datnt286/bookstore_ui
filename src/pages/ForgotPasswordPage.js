import { useEffect, useState } from 'react';
import ForgotPassword from '../components/ForgotPassword';

function ForgotPasswordPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return <>{loading ? <div className="loader"></div> : <ForgotPassword />}</>;
}

export default ForgotPasswordPage;
