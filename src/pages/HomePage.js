import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';
import HotDealBanner from '../components/HotDealBanner';
import Carousel from '../components/Carousel';

function HomePage() {
    const [newBooks, setNewBooks] = useState([]);
    const [bestsellers, setBestsellers] = useState([]);
    const [combos, setCombos] = useState([]);
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get('/home');
                setNewBooks(res.data.new_books);
                setBestsellers(res.data.bestsellers);
                setCombos(res.data.combos);
                setSliders(res.data.sliders);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            {sliders && sliders.length > 0 && <Carousel data={sliders} />}
            <ProductSection title="Sách mới" url="/sach-moi" data={newBooks} />
            {bestsellers && bestsellers.length > 0 && (
                <ProductSection title="Sách bán chạy" url="/sach-ban-chay" data={bestsellers} />
            )}
            <HotDealBanner />
            <ProductSection title="Combo" url="/combo" data={combos} />
        </DefaultLayout>
    );
}

export default HomePage;
