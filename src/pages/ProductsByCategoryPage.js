import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';
import Pagination from '../components/Pagination';
import NotFoundPage from './NotFoundPage';

function ProductsByCategoryPage() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [pageCount, setPageCount] = useState(1);
    const [notFound, setNotFound] = useState(false);
    const { categorySlug } = useParams();

    const fetchProducts = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/category/${categorySlug}?page=${page}`);
            setBooks(res.data.books);
            setTitle(res.data.category.name);
            setPageCount(res.data.total_pages);
        } catch (error) {
            if (error.response.status === 404) {
                setNotFound(true);
            } else {
                console.error('Lỗi: ', error);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (notFound) {
        return <NotFoundPage />;
    }

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
