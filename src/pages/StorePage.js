import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';

function StorePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get('/index');
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <Store data={products} />
        </DefaultLayout>
    );
}

export default StorePage;
