import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

function CombosPage() {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get('/get-combos');
                setCombos(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <Product title="Combo" url="/combo" data={combos} />
        </DefaultLayout>
    );
}

export default CombosPage;
