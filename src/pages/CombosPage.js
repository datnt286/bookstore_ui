import axios from 'axios';
import { useEffect, useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function CombosPage() {
    const [combos, setCombos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${apiDomain}/get-combos`);
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
