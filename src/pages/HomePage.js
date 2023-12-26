import axios from 'axios';
import { useEffect, useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';
import HotDealBanner from '../components/HotDealBanner';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function HomePage() {
    const [products, setProducts] = useState({
        newBooks: [{ images: [{ absolute_path: '' }] }],
        combos: [],
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${apiDomain}/get-newbooks-and-combos`);
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <ProductSection title="Sách mới" url="/sach-moi" data={products.newBooks} />
            <HotDealBanner />
            <ProductSection title="Combo" url="/combo" data={products.combos} />
        </DefaultLayout>
    );
}

export default HomePage;
