import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import Aside from './Aside';
import ProductCard from '../ProductCard';

function Store({ data, onApplyFilters }) {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [selectedSort, setSelectedSort] = useState(null);

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

    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
        }
    };

    const handlePriceChange = (event) => {
        const price = event.target.value;
        setSelectedPrice(price);
    };

    const handleAuthorChange = (event) => {
        const authorId = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedAuthors([...selectedAuthors, authorId]);
        } else {
            setSelectedAuthors(selectedAuthors.filter((id) => id !== authorId));
        }
    };

    const handleApplyFilters = (event) => {
        event.preventDefault();

        onApplyFilters({
            category_id: selectedCategories,
            price_range: selectedPrice,
            author_id: selectedAuthors,
            sort: selectedSort,
        });
    };

    const handleSortChange = (event) => {
        const selectedSortValue = event.target.value;
        setSelectedSort(selectedSortValue);

        onApplyFilters({
            category_id: selectedCategories,
            price_range: selectedPrice,
            author_id: selectedAuthors,
            sort: selectedSortValue,
        });
    };

    return (
        <div className="section store">
            <div className="container">
                <div className="row">
                    <Aside
                        categories={categories}
                        authors={authors}
                        handleCategoryChange={handleCategoryChange}
                        handlePriceChange={handlePriceChange}
                        handleAuthorChange={handleAuthorChange}
                        handleApplyFilters={handleApplyFilters}
                    />

                    {data.length > 0 ? (
                        <div id="store" className="col-md-9">
                            <div className="store-filter clearfix">
                                <div className="store-sort">
                                    <label>Sắp xếp theo:</label>
                                    <select className="input-select form-control" onChange={handleSortChange}>
                                        <option value={1}>Mới nhất</option>
                                        <option value={2}>Bán chạy</option>
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
