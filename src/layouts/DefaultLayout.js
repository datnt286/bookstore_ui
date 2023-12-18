import Header from '../components/Header';
import Footer from '../components/Footer';
import NewSletter from '../components/NewSletter';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <NewSletter />
            <Footer />
        </>
    );
}

export default DefaultLayout;
