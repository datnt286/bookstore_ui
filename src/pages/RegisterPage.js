import { useEffect, useState } from 'react';
import Register from '../components/Register';

function RegisterPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return <>{loading ? <div class="loader"></div> : <Register />}</>;
}

export default RegisterPage;
