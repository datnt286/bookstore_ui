import axios from 'axios';
import { useEffect, useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import Category from '../components/CategorySection';

function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/category');
                setCategories(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <DefaultLayout>
            <Category data={categories} />
        </DefaultLayout>
    );
}

export default CategoryPage;
