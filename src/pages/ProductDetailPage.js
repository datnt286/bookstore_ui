import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductDetail from '../components/ProductDetail';
import ProductSection from '../components/ProductSection';
import RelatedBooks from '../components/RelatedBooks';
import NotFoundPage from './NotFoundPage';

const EXPIRATION_DAYS = 30;

function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [combos, setCombos] = useState([]);
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [categorySlug, setCategorySlug] = useState('');
    const [notFound, setNotFound] = useState(false);
    const { slug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const productRes = await axiosInstance.get(`san-pham/${slug}`);
                setProduct(productRes.data);
                setCombos(productRes.data.combos);

                const categoryId = productRes.data.category_id;
                const categorySlug = productRes.data.category_slug;
                setCategorySlug(categorySlug);

                const relatedBooksRes = await axiosInstance.get(`/books-by-category-id/${categoryId}`);
                setRelatedBooks(relatedBooksRes.data);

                const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];

                const existingProductIndex = viewedProducts.findIndex((viewedProduct) => viewedProduct.slug === slug);

                if (existingProductIndex !== -1) {
                    viewedProducts[existingProductIndex].timestamp =
                        new Date().getTime() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
                } else {
                    const newViewedProduct = {
                        ...productRes.data,
                        timestamp: new Date().getTime() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000,
                    };
                    viewedProducts.push(newViewedProduct);
                }

                viewedProducts.sort((a, b) => b.timestamp - a.timestamp);

                const validViewedProducts = viewedProducts.filter(
                    (viewedProduct) => viewedProduct.timestamp > new Date().getTime(),
                );

                localStorage.setItem('viewedProducts', JSON.stringify(validViewedProducts));
            } catch (error) {
                if (error.response.status === 404) {
                    setNotFound(true);
                } else {
                    console.error('Lỗi: ', error);
                }
            }
        }

        fetchData();
    }, [slug]);

    if (notFound) {
        return <NotFoundPage />;
    }

    return (
        <DefaultLayout>
            <ProductDetail data={product} />
            {product.combos && <ProductSection title="Combo" data={combos} url="/combo" />}
            {!product.is_combo && <RelatedBooks data={relatedBooks} slug={slug} url={`/danh-muc/${categorySlug}`} />}
        </DefaultLayout>
    );
}

export default ProductDetailPage;
