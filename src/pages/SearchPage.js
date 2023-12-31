import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Store from '../components/Store';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function SearchPage() {
    const [products, setProducts] = useState([]);

    const { keyword } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${apiDomain}/search/${keyword}`);
                setProducts(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
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
