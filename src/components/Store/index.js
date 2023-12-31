import { useEffect, useState } from 'react';
import Aside from './Aside';
import ProductGrid from './ProductGrid';
import axios from 'axios';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function StoreSection({ data }) {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesRes = await axios.get(`${apiDomain}/category`);
                const authorsRes = await axios.get(`${apiDomain}/author`);
                setCategories(categoriesRes.data.data);
                setAuthors(authorsRes.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Aside categories={categories} authors={authors} />
                    <ProductGrid data={data} />
                </div>
            </div>
        </div>
    );
}

export default StoreSection;
