import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

function ViewedProductsPage() {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];

    return (
        <DefaultLayout>
            <Product title="Sản phẩm đã xem" data={viewedProducts} />
        </DefaultLayout>
    );
}

export default ViewedProductsPage;
