import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
