import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import Aside from './Aside';
import ProductGrid from './ProductGrid';
import ProductCard from '../ProductCard';

function Store({ data, onApplyFilters }) {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesRes = await axiosInstance.get('/category');
                const authorsRes = await axiosInstance.get('/author');
                setCategories(categoriesRes.data);
                setAuthors(authorsRes.data);
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
                        <div id="store" className="col-md-9">
                            <div className="store-filter clearfix">
                                <div className="store-sort">
                                    <label>Sắp xếp theo:</label>
                                    <select className="input-select form-control">
                                        <option value="0">Bán chạy</option>
                                        <option value="1">Mới nhất</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {data.map((product, index) => {
                                    return <ProductCard key={index} data={product} />;
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-9">
                            <h3 className="mt-4">Không có kết quả tìm kiếm.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Store;
