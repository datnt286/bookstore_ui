import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

function ProductsByCategoryPage() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const { categorySlug } = useParams();

    const fetchProducts = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/category/${categorySlug}?page=${page}`);
            setBooks(res.data.books);
            setTitle(res.data.category.name);
            setPageCount(res.data.total_pages);
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
            <Products title={title} data={books} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default ProductsByCategoryPage;
