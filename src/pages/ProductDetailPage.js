import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductDetail from '../components/ProductDetail';
import ProductSection from '../components/ProductSection';
import RelatedBook from '../components/RelatedBook';

function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [combos, setCombos] = useState([]);

    const { slug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const productRes = await axios.get(`http://127.0.0.1:8000/api/${slug}`);
                setProduct(productRes.data.data);
                setCombos(productRes.data.data.combos);

                const categoryId = productRes.data.data.category_id;

                const relatedBooksRes = await axios.get(
                    `http://127.0.0.1:8000/api/get-books-by-category/${categoryId}`,
                );
                setRelatedBooks(relatedBooksRes.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [slug]);

    return (
        <DefaultLayout>
            <ProductDetail data={product} />
            {product.combos && <ProductSection title={'Combo'} data={combos} />}
            {!product.is_combo && <RelatedBook data={relatedBooks} slug={slug}/>}
        </DefaultLayout>
    );
}

export default ProductDetailPage;
