import axios from 'axios';
import { useEffect, useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function StorePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsRes = await axios.get(`${apiDomain}/index`);
                const categoriesRes = await axios.get(`${apiDomain}/category`);
                const authorsRes = await axios.get(`${apiDomain}/author`);
                setProducts(productsRes.data.data);
                setCategories(categoriesRes.data.data);
                setAuthors(authorsRes.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <Store products={products} categories={categories} authors={authors}/>
        </DefaultLayout>
    );
}

export default StorePage;
