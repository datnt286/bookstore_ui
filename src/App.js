import { Route, Routes } from 'react-router-dom';
import './style.css';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import NewBooksPage from './pages/NewBooksPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import CombosPage from './pages/CombosPage';
import StorePage from './pages/StorePage';
import SearchPage from './pages/SearchPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ViewedProductsPage from './pages/ViewedProductsPage';
import WishlistPage from './pages/WishlistPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MePage from './pages/MePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/danh-muc" element={<CategoriesPage />} />
            <Route path="/danh-muc/:categorySlug" element={<ProductsByCategoryPage />} />
            <Route path="/sach-moi" element={<NewBooksPage />} />
            <Route path="/combo" element={<CombosPage />} />
            <Route path="/cua-hang" element={<StorePage />} />
            <Route path="/tim-kiem/:keyword" element={<SearchPage />} />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/thanh-toan" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/san-pham-da-xem" element={<ViewedProductsPage />} />
            <Route path="/dang-ky" element={<RegisterPage />} />
            <Route path="/dang-nhap" element={<LoginPage />} />
            <Route path="/tai-khoan" element={<MePage />} />
            <Route path="/quen-mat-khau" element={<ForgotPasswordPage />} />
            <Route path="/hoa-don" element={<OrderPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/:slug" element={<ProductDetailPage />} />
        </Routes>
    );
}

export default App;
