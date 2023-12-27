import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

function ViewedProductsPage() {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];

    return (
        <DefaultLayout>
            {viewedProducts.length > 0 ? (
                <Product title="Sản phẩm đã xem" data={viewedProducts} />
            ) : (
                <h3 className="title p-5 mx-5">Bạn chưa xem sản phẩm nào!</h3>
            )}
        </DefaultLayout>
    );
}

export default ViewedProductsPage;
