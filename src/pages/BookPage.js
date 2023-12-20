import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Book from '../components/Book';

function BookPage() {
    const [books, setBooks] = useState([{ images: [] }]);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/get-books-by-category/${id}`);
                setBooks(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <DefaultLayout>
            <Book data={books} />
        </DefaultLayout>
    );
}

export default BookPage;
