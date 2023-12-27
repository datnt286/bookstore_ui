import { useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event) => {
        const slug = convertToSlug(event.target.value);
        setKeyword(slug);
    };

    const convertToSlug = (text) => {
        const slug = text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        return slug;
    };

    return (
        <div className="col-md-6">
            <div id="header-search" className="header-search">
                <form>
                    <input
                        id="search-input"
                        onChange={handleInputChange}
                        className="form-control input"
                        placeholder="Nhập từ khoá..."
                    />
                    <Link to={`/tim-kiem/${keyword}`}>
                        <button id="search-btn" className="search-btn">
                            Tìm kiếm
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Search;
