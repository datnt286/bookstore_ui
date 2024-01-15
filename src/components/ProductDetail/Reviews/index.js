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
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    const [reviews, setReviews] = useState(data.comments || []);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [reviewStats, setReviewStats] = useState({
        count1Star: 0,
        count2Stars: 0,
        count3Stars: 0,
        count4Stars: 0,
        count5Stars: 0,
    });

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
                const response = await axiosInstance.get('review/get-reviews-by-product-id', { params });
                const res = response.data;

                setReviews(res.data.reviews);
                setAverageRating(res.data.average_rating);
                setTotalReviews(res.data.total_reviews);
                setReviewStats({
                    count1Star: res.data.review_stats.count_1_star,
                    count2Stars: res.data.review_stats.count_2_stars,
                    count3Stars: res.data.review_stats.count_3_stars,
                    count4Stars: res.data.review_stats.count_4_stars,
                    count5Stars: res.data.review_stats.count_5_stars,
                });
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
                <Rating
                    data={data}
                    totalReviews={totalReviews}
                    reviewStats={reviewStats}
                    averageRating={averageRating}
                />

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
