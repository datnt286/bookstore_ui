import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

function NewBooksPage() {
    const [newBooks, setNewBooks] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const fetchNewBooks = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/get-newbooks?page=${page}`);
            setNewBooks(res.data.data.new_books);
            setPageCount(res.data.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        fetchNewBooks();
    }, []);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchNewBooks(page);
    };

    return (
        <DefaultLayout>
            <Products title="Sách mới" data={newBooks} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default NewBooksPage;
