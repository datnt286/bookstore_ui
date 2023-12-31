import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const slug = convertToSlug(event.target.value);
        setKeyword(slug);
        setValidationError('');
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

    const handleSearch = (event) => {
        event.preventDefault();

        if (!keyword) {
            setValidationError('Vui lòng nhập từ khoá.'); // Set validation error if keyword is empty
            return;
        } else {
            navigate(`/tim-kiem/${keyword}`);
        }
    };

    return (
        <div className="col-md-6">
            <div id="header-search" className="header-search">
                <form onSubmit={handleSearch}>
                    <input
                        id="search-input"
                        onChange={handleInputChange}
                        className={`form-control input ${validationError ? 'is-invalid' : ''}`}
                        placeholder={validationError ? validationError : 'Nhập từ khoá...'}
                    />
                    <button type="submit" id="search-btn" className="search-btn">
                        Tìm kiếm
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Search;
