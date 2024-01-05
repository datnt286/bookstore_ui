import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Product from '../components/Product';

function NewBooksPage() {
    const [newbooks, setNewbooks] = useState([]);

    useEffect(() => {
        async function fetchNewBooks() {
            try {
                const res = await axiosInstance.get('/get-newbooks');
                setNewbooks(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchNewBooks();
    }, []);

    return (
        <DefaultLayout>
            <Product title="Sách mới" data={newbooks} />
        </DefaultLayout>
    );
}

export default NewBooksPage;
