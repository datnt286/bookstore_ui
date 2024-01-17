import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

function BestsellersPage() {
    const [bestsellers, setBestsellers] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const fetchBestsellers = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/bestsellers?page=${page}`);
            setBestsellers(res.data.bestsellers);
            setPageCount(res.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        fetchBestsellers();
    }, []);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchBestsellers(page);
    };

    return (
        <DefaultLayout>
            <Products title="Sách bán chạy" url="/sach-ban-chay" data={bestsellers} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default BestsellersPage;
