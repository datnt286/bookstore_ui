import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';
import Pagination from '../components/Pagination';

function SearchPage() {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const { keyword } = useParams();

    const fetchProducts = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/search/${keyword}?page=${page}`);
            setProducts(res.data.data);
            setPageCount(Math.ceil(res.data.total / res.data.per_page));
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
            {products.length > 0 ? (
                <>
                    <Store data={products} />
                    <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
                </>
            ) : (
                <h3 className="title p-5 mx-5">Không tìm thấy kết quả tìm kiếm phù hợp!</h3>
            )}
        </DefaultLayout>
    );
}

export default SearchPage;
