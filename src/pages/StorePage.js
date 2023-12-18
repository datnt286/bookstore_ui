import { useEffect, useState } from 'react';
import axios from 'axios';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/StoreSection';

function StorePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/index');
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
            <Store data={products} />
        </DefaultLayout>
    );
}

export default StorePage;
