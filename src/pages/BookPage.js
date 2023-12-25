import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Book from '../components/Book';

function BookPage() {
    const [books, setBooks] = useState([{ images: [] }]);
    const { categorySlug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/category/${categorySlug}`);
                setBooks(res.data.data.books);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [categorySlug]);

    return (
        <DefaultLayout>
            <Book title={'Danh mục'} data={books} />
        </DefaultLayout>
    );
}

export default BookPage;
