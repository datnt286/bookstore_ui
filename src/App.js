import { Route, Routes } from 'react-router-dom';
import './style.css';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import StorePage from './pages/StorePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MePage from './pages/MePage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/danh-muc" element={<CategoryPage />} />
            <Route path="/danh-muc/:categorySlug" element={<BookPage />} />
            <Route path="/cua-hang" element={<StorePage />} />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/thanh-toan" element={<CheckoutPage />} />
            <Route path="/dang-ky" element={<RegisterPage />} />
            <Route path="/dang-nhap" element={<LoginPage />} />
            <Route path="/tai-khoan" element={<MePage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/:slug" element={<ProductDetailPage />} />
        </Routes>
    );
}

export default App;
