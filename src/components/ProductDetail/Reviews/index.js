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

    const [totalReviews, setTotalReviews] = useState(0);
    const [count1StarReviews, setCount1StarReviews] = useState(0);
    const [count2StarsReviews, setCount2StarsReviews] = useState(0);
    const [count3StarsReviews, setCount3StarsReviews] = useState(0);
    const [count4StarsReviews, setCount4StarsReviews] = useState(0);
    const [count5StarsReviews, setCount5StarsReviews] = useState(0);

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
                setReviews(res.data.data.reviews);
                setTotalReviews(res.data.data.total_reviews);
                setCount1StarReviews(res.data.data.count_1_star_reviews);
                setCount2StarsReviews(res.data.data.count_2_stars_reviews);
                setCount3StarsReviews(res.data.data.count_3_stars_reviews);
                setCount4StarsReviews(res.data.data.count_4_stars_reviews);
                setCount5StarsReviews(res.data.data.count_5_stars_reviews);
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
                    count1StarReviews={count1StarReviews}
                    count2StarsReviews={count2StarsReviews}
                    count3StarsReviews={count3StarsReviews}
                    count4StarsReviews={count4StarsReviews}
                    count5StarsReviews={count5StarsReviews}
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
