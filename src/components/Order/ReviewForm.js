import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';

function ReviewForm({ data, hideReview }) {
    const user = useSelector((state) => state.auth.user);
    const [rating, setRating] = useState(null);
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePostReview = async (event) => {
        event.preventDefault();

        try {
            const review = {
                customer_id: user.id,
                book_id: data.book_id,
                combo_id: data.combo_id,
                rating: rating,
                content: content,
            };

            const res = await axiosInstance.post('/review/create', review);
            console.log(res.data.message);

            setRating(null);
            setContent('');
            setErrorMessage('');
            hideReview();
        } catch (error) {
            if (error.response.status === 422) {
                setErrorMessage(error.response.data.message);
            } else {
                console.error('Lỗi: ', error);
            }
        }
    };

    return (
        <div id="review-form">
            <form onSubmit={handlePostReview} className="review-form">
                <textarea
                    value={content}
                    className="form-control input review-input col-md-9"
                    placeholder="Đánh giá của bạn"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <div className="review-rating text-center col-md-3">
                    <div className="stars-wrapper input-rating">
                        <span>Đánh giá: </span>
                        <div className="stars">
                            <input type="radio" name="rating" id="star5" onChange={() => setRating(5)} />
                            <label htmlFor="star5"></label>
                            <input type="radio" name="rating" id="star4" onChange={() => setRating(4)} />
                            <label htmlFor="star4"></label>
                            <input type="radio" name="rating" id="star3" onChange={() => setRating(3)} />
                            <label htmlFor="star3"></label>
                            <input type="radio" name="rating" id="star2" onChange={() => setRating(2)} />
                            <label htmlFor="star2"></label>
                            <input type="radio" name="rating" id="star1" onChange={() => setRating(1)} />
                            <label htmlFor="star1"></label>
                        </div>
                        {errorMessage && <p className="text-danger my-2">{errorMessage}</p>}
                    </div>

                    <button className="btn btn-sm btn-danger btn-review">Đăng</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;
