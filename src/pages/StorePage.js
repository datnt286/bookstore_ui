import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';
import Pagination from '../components/Pagination';

function StorePage() {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [priceRangeFilter, setPriceRangeFilter] = useState(null);
    const [authorFilter, setAuthorFilter] = useState([]);
    const [sortFilter, setSortFilter] = useState(0);

    const fetchProducts = async (page = 1) => {
        try {
            let url = `/index?page=${page}`;

            if (categoryFilter.length > 0) {
                const categoryIds = categoryFilter.join(',');
                url += `&category_id=${categoryIds}`;
            }

            if (priceRangeFilter) {
                url += `&price_range=${priceRangeFilter}`;
            }

            if (authorFilter.length > 0) {
                const authorIds = authorFilter.join(',');
                url += `&author_id=${authorIds}`;
            }

            if (sortFilter) {
                url += `&sort=${sortFilter}`;
            }

            const res = await axiosInstance.get(url);
            setProducts(res.data.data.books);
            setPageCount(res.data.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    const handleApplyFilters = ({ category_id, price_range, author_id }) => {
        setCategoryFilter(category_id);
        setPriceRangeFilter(price_range);
        setAuthorFilter(author_id);
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryFilter, priceRangeFilter, authorFilter]);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchProducts(page);
    };

    return (
        <DefaultLayout>
            <Store data={products} onApplyFilters={handleApplyFilters} />
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </DefaultLayout>
    );
}

export default StorePage;
