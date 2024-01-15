import { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import DefaultLayout from '../layouts/DefaultLayout';
import Categories from '../components/Categories';

function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await axiosInstance.get('/category');
                setCategories(res.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <DefaultLayout>
            <Categories data={categories} />
        </DefaultLayout>
    );
}

export default CategoriesPage;
