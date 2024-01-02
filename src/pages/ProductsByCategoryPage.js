import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

function ProductsByCategoryPage() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');

    const { categorySlug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get(`/category/${categorySlug}`);
                setBooks(res.data.data.books);
                setTitle(res.data.data.name);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [categorySlug]);

    return (
        <DefaultLayout>
            <Product title={title} data={books} />
        </DefaultLayout>
    );
}

export default ProductsByCategoryPage;
