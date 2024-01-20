import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <div class="loader"></div>
            ) : (
                <>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </>
            )}
        </>
    );
}

export default DefaultLayout;
