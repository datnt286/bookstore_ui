import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';

function SearchPage() {
    const [products, setProducts] = useState([]);

    const { keyword } = useParams();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axiosInstance.get(`/search/${keyword}`);
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchProducts();
    }, [keyword]);

    return (
        <DefaultLayout>
            {products.length > 0 ? (
                <Store data={products} />
            ) : (
                <h3 className="title p-5 mx-5">Không tìm thấy kết quả tìm kiếm phù hợp!</h3>
            )}
        </DefaultLayout>
    );
}

export default SearchPage;
