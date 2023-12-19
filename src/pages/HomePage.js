import { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';
import HotDealBanner from '../components/HotDealBanner';

function HomePage() {
    const [products, setProducts] = useState({
        newBooks: [{ images: [{ absolute_path: '' }] }],
        combos: [],
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/get-new-books-and-combos');
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    console.log(products);

    return (
        <DefaultLayout>
            <ProductSection title={'Sách mới'} data={products.newBooks} />
            <HotDealBanner />
            <ProductSection title={'Combo'} data={products.combos} />
        </DefaultLayout>
    );
}

export default HomePage;
