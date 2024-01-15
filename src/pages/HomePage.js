import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';
import HotDealBanner from '../components/HotDealBanner';

function HomePage() {
    const [products, setProducts] = useState({
        newBooks: [],
        combos: [],
    });

    useEffect(() => {
        async function fetchNewBooksAndCombos() {
            try {
                const res = await axiosInstance.get('/get-newbooks-and-combos');
                setProducts(res.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchNewBooksAndCombos();
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
