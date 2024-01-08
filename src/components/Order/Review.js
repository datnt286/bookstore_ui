import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';

function Review({ orderDetailId, hideReview }) {
    const user = useSelector((state) => state.auth.user);
    const [rating, setRating] = useState(null);
    const [content, setContent] = useState('');

    const handlePostReview = async (event) => {
        event.preventDefault();

        try {
            const data = {
                customer_id: user.id,
                order_detail_id: orderDetailId,
                rating: rating,
                content: content,
            };

            const res = await axiosInstance.post('/review/create', data);
            console.log(res.data.message);
        } catch (error) {
            console.error('Lỗi: ', error);
        }

        hideReview();
    };

    return (
        <div id="review row">
            <form onSubmit={handlePostReview}>
                <textarea
                    value={content}
                    className="form-control input review-input col-md-9"
                    placeholder="Đánh giá của bạn"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className="review-rating col-md-3">
                    <div className="stars-wrapper">
                        <span>Đánh giá: </span>
                        <div className="stars">
                            <input type="radio" name="rating" id="star1" onChange={() => setRating(1)} />
                            <label htmlFor="star1"></label>
                            <input type="radio" name="rating" id="star2" onChange={() => setRating(2)} />
                            <label htmlFor="star2"></label>
                            <input type="radio" name="rating" id="star3" onChange={() => setRating(3)} />
                            <label htmlFor="star3"></label>
                            <input type="radio" name="rating" id="star4" onChange={() => setRating(4)} />
                            <label htmlFor="star4"></label>
                            <input type="radio" name="rating" id="star5" onChange={() => setRating(5)} />
                            <label htmlFor="star5"></label>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-danger btn-review">Đăng</button>
                </div>
            </form>
        </div>
    );
}

export default Review;
