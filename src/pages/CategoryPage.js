import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';

import DefaultLayout from '../layouts/DefaultLayout';
import Category from '../components/CategorySection';

function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await axiosInstance.get('/category');
                setCategories(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <DefaultLayout>
            <Category data={categories} />
        </DefaultLayout>
    );
}

export default CategoryPage;
