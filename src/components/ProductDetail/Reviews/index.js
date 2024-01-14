import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import Rating from './Rating';
import ReviewRow from './ReviewRow';
import ReviewForm from './ReviewForm';

function Reviews({ data }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const user = useSelector((state) => state.auth.user);
    const [isDelivered, setIsDelivered] = useState(false);
    const [reviews, setReviews] = useState(data.comments || []);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    useEffect(() => {
        async function fetchCheckDelivered() {
            try {
                if (user) {
                    const params = {
                        customer_id: user.id,
                        [data.is_combo ? 'combo_id' : 'book_id']: data.id,
                    };

                    const res = await axiosInstance.get('/review/check-delivered', { params });
                    setIsDelivered(res.data.is_delivered);
                }
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        async function fetchReviews() {
            try {
                const params = data.is_combo ? { combo_id: data.id } : { book_id: data.id };
                const res = await axiosInstance.get('review/get-reviews-by-product-id', { params });
                setReviews(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        if (reviewSubmitted) {
            fetchReviews();
            setReviewSubmitted(false);
        }

        fetchCheckDelivered();
        fetchReviews();
    }, [data.is_combo, user, data.id, reviewSubmitted]);

    return (
        <div id="reviews" className="tab-pane fade in">
            <div className="row">
                <Rating data={data} reviews={reviews} />

                <div className="col-md-6">
                    <div id="reviews">
                        {reviews.length > 0 ? (
                            <ul className="reviews">
                                {reviews.map((review, index) => (
                                    <ReviewRow key={index} data={review} />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center">Chưa có đánh giá.</p>
                        )}
                    </div>
                </div>

                {isLoggedIn && isDelivered && (
                    <ReviewForm data={data} onReviewSubmitted={() => setReviewSubmitted(true)} />
                )}
            </div>
        </div>
    );
}

export default Reviews;
