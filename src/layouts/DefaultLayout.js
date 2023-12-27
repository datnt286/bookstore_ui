import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Newsletter />
            <Footer />
        </>
    );
}

export default DefaultLayout;
