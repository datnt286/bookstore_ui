import DefaultLayout from '../layouts/DefaultLayout';
import ProductDetail from '../components/ProductDetail';
import NewSletter from '../components/NewSletter';

function ProductDetailPage() {
    return (
        <DefaultLayout>
            <ProductDetail />
            <NewSletter />
        </DefaultLayout>
    );
}

export default ProductDetailPage;
