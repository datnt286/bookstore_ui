import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function SearchPage() {
    const [products, setProducts] = useState([]);

    const { keyword } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${apiDomain}/search/${keyword}`);
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [keyword]);

    console.log(products);

    return (
        <DefaultLayout>
            <Store data={products} />
        </DefaultLayout>
    );
}

export default SearchPage;
