import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';

function ReviewForm({ data, onReviewSubmitted }) {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);

    const [rating, setRating] = useState(null);
    const [content, setContent] = useState('');
    const [resetRating, setResetRating] = useState(Date.now());
    const [errorMessage, setErrorMessage] = useState('');

    const handlePostReview = async (event) => {
        event.preventDefault();

        try {
            const review = {
                customer_id: user.id,
                [data.is_combo ? 'combo_id' : 'book_id']: data.id,
                rating: rating,
                content: content,
            };

            const res = await axiosInstance.post('/review/create', review, {
                headers: { Authorization: 'Bearer ' + token },
            });

            console.log(res.message);

            setRating(null);
            setContent('');
            setResetRating(Date.now());
            setErrorMessage('');
            onReviewSubmitted();
        } catch (error) {
            if (error.response.status === 422) {
                setErrorMessage(error.response.data.message);
            } else {
                console.error('Lỗi: ', error);
            }
        }
    };

    return (
        <div className="col-md-3">
            <div id="review-form">
                <form className="review-form" onSubmit={handlePostReview}>
                    <textarea
                        className="form-control input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Nhập nội dung đánh giá."
                    ></textarea>

                    <div className="input-rating">
                        <span>Đánh giá: </span>
                        <div className="stars">
                            <input
                                type="radio"
                                id="star5"
                                name="rating"
                                onChange={() => setRating(5)}
                                key={`star5-${resetRating}`}
                            />
                            <label htmlFor="star5"></label>
                            <input
                                type="radio"
                                id="star4"
                                name="rating"
                                onChange={() => setRating(4)}
                                key={`star4-${resetRating}`}
                            />
                            <label htmlFor="star4"></label>
                            <input
                                type="radio"
                                id="star3"
                                name="rating"
                                onChange={() => setRating(3)}
                                key={`star3-${resetRating}`}
                            />
                            <label htmlFor="star3"></label>
                            <input
                                type="radio"
                                id="star2"
                                name="rating"
                                onChange={() => setRating(2)}
                                key={`star2-${resetRating}`}
                            />
                            <label htmlFor="star2"></label>
                            <input
                                type="radio"
                                id="star1"
                                name="rating"
                                onChange={() => setRating(1)}
                                key={`star1-${resetRating}`}
                            />
                            <label htmlFor="star1"></label>
                        </div>
                        {errorMessage && <p className="text-danger my-2">{errorMessage}</p>}
                    </div>
                    <button className="primary-btn">Đăng</button>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
