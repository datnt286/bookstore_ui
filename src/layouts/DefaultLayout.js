import Header from '../components/Header';
import NewSletter from '../components/NewSletter';
import Footer from '../components/Footer';

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
