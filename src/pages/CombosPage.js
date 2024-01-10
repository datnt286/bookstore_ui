import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

function CombosPage() {
    const [combos, setCombos] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    const fetchCombos = async (page = 1) => {
        try {
            const res = await axiosInstance.get(`/get-combos?page=${page}`);
            setCombos(res.data.data);
            setPageCount(res.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        fetchCombos();
    }, []);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchCombos(page);
    };

    return (
        <DefaultLayout>
            <Products title="Combo" url="/combo" data={combos} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default CombosPage;
