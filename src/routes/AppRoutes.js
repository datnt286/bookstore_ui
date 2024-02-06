import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/HomePage';
import BestsellersPage from '../pages/BestsellersPage';
import NewBooksPage from '../pages/NewBooksPage';
import CombosPage from '../pages/CombosPage';
import CategoriesPage from '../pages/CategoriesPage';
import ProductsByCategoryPage from '../pages/ProductsByCategoryPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import SearchPage from '../pages/SearchPage';
import StorePage from '../pages/StorePage';
import CartPage from '../pages/CartPage';
import WishlistPage from '../pages/WishlistPage';
import ViewedProductsPage from '../pages/ViewedProductsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ContactPage from '../pages/ContactPage';
import MePage from '../pages/MePage';
import CheckoutPage from '../pages/CheckoutPage';
import OrdersPage from '../pages/OrdersPage';
import ForbiddenPage from '../pages/ForbiddenPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sach-moi" element={<NewBooksPage />} />
            <Route path="/sach-ban-chay" element={<BestsellersPage />} />
            <Route path="/combo" element={<CombosPage />} />
            <Route path="/danh-muc" element={<CategoriesPage />} />
            <Route path="/danh-muc/:categorySlug" element={<ProductsByCategoryPage />} />
            <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
            <Route path="/tim-kiem/:keyword" element={<SearchPage />} />
            <Route path="/cua-hang" element={<StorePage />} />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/san-pham-da-xem" element={<ViewedProductsPage />} />
            <Route path="/dang-ky" element={<RegisterPage />} />
            <Route path="/dang-nhap" element={<LoginPage />} />
            <Route path="/quen-mat-khau" element={<ForgotPasswordPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/khong-co-quyen-truy-cap" element={<ForbiddenPage />} />
            <Route
                path="/tai-khoan"
                element={
                    <PrivateRoute>
                        <MePage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/thanh-toan"
                element={
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/hoa-don"
                element={
                    <PrivateRoute>
                        <OrdersPage />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
