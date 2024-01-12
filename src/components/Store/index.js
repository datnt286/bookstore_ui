import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import Aside from './Aside';
import ProductGrid from './ProductGrid';

function Store({ data, onApplyFilters }) {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesRes = await axiosInstance.get('/category');
                const authorsRes = await axiosInstance.get('/author');
                setCategories(categoriesRes.data.data);
                setAuthors(authorsRes.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="section store">
            <div className="container">
                <div className="row">
                    <Aside categories={categories} authors={authors} onApplyFilters={onApplyFilters} />
                    {data.length > 0 ? (
                        <ProductGrid data={data} />
                    ) : (
                        <div className="col-md-9">
                            <h3 className='mt-4'>Không có kết quả tìm kiếm.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Store;
