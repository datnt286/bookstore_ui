import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';

function CombosPage() {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        async function fetchCombos() {
            try {
                const res = await axiosInstance.get('/get-combos');
                setCombos(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchCombos();
    }, []);

    return (
        <DefaultLayout>
            <Products title="Combo" url="/combo" data={combos} />
        </DefaultLayout>
    );
}

export default CombosPage;
