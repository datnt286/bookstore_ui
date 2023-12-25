import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Book from '../components/Book';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function BookPage() {
    const [books, setBooks] = useState([{ images: [] }]);
    const [title, setTitle] = useState('');
    const { categorySlug } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${apiDomain}/category/${categorySlug}`);
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
            <Book title={title} data={books} />
        </DefaultLayout>
    );
}

export default BookPage;
