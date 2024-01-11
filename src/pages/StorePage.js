import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';
import Pagination from '../components/Pagination';

function StorePage() {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const fetchProducts = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/index?page=${page}`);
            setProducts(res.data.data.books);
            setPageCount(res.data.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchProducts(page);
    };

    return (
        <DefaultLayout>
            <Store data={products} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default StorePage;
