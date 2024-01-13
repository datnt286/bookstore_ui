import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';

function ReviewForm({ data }) {
    const user = useSelector((state) => state.auth.user);
    const [rating, setRating] = useState(null);
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //const [resetRating, setResetRating] = useState(Date.now());

    const handlePostReview = async (event) => {
        event.preventDefault();

        if (!content.trim() && !rating) {
            setErrorMessage('Vui lòng nhập nội dung đánh giá.');
            return;
        }

        try {
            const review = {
                customer_id: user.id,
                [data.is_combo ? 'combo_id' : 'book_id']: data.id,
                rating: rating,
                content: content,
            };

            const res = await axiosInstance.post('/review/create', review);
            console.log(res.data.message);

            setContent('');
            //setResetRating(Date.now());
            setErrorMessage('');
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    const placeholder = errorMessage ? errorMessage : 'Nhập nội dung đánh giá.';

    return (
        <div className="col-md-3">
            <div id="review-form">
                <form className="review-form" onSubmit={handlePostReview}>
                    <textarea
                        className="form-control input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={placeholder}
                    ></textarea>
                    <div className="input-rating">
                        <span>Đánh giá: </span>
                        <div className="stars">
                            <input
                                type="radio"
                                id="star1"
                                name="rating"
                                value="1"
                                onChange={() => setRating(1)}
                                //key={`star1-${resetRating}`}
                            />
                            <label htmlFor="star1"></label>
                            <input
                                type="radio"
                                id="star2"
                                name="rating"
                                value="2"
                                onChange={() => setRating(2)}
                                //key={`star2-${resetRating}`}
                            />
                            <label htmlFor="star2"></label>
                            <input
                                type="radio"
                                id="star3"
                                name="rating"
                                value="3"
                                onChange={() => setRating(3)}
                                //key={`star3-${resetRating}`}
                            />
                            <label htmlFor="star3"></label>
                            <input
                                type="radio"
                                id="star4"
                                name="rating"
                                value="4"
                                onChange={() => setRating(4)}
                                //key={`star4-${resetRating}`}
                            />
                            <label htmlFor="star4"></label>
                            <input
                                type="radio"
                                id="star5"
                                name="rating"
                                value="5"
                                onChange={() => setRating(5)}
                                //key={`star5-${resetRating}`}
                            />
                            <label htmlFor="star5"></label>
                        </div>
                    </div>
                    <button className="primary-btn">Đăng</button>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
