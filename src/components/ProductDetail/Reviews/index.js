import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import Rating from './Rating';
import ReviewRow from './ReviewRow';
import ReviewForm from './ReviewForm';
import Pagination from '../../Pagination';

function Reviews({ data }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);

    const [isDelivered, setIsDelivered] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [reviewStats, setReviewStats] = useState({
        count1Star: 0,
        count2Stars: 0,
        count3Stars: 0,
        count4Stars: 0,
        count5Stars: 0,
    });

    const [pageCount, setPageCount] = useState(1);

    const fetchReviews = async (page = 1) => {
        try {
            const params = data.is_combo ? { combo_id: data.id, page } : { book_id: data.id, page };
            const response = await axiosInstance.get('review/reviews-by-product-id', { params });
            const res = response.data;

            setReviews(res.reviews);
            setAverageRating(res.average_rating);
            setTotalReviews(res.total_reviews);
            setReviewStats({
                count1Star: res.review_stats.count_1_star,
                count2Stars: res.review_stats.count_2_stars,
                count3Stars: res.review_stats.count_3_stars,
                count4Stars: res.review_stats.count_4_stars,
                count5Stars: res.review_stats.count_5_stars,
            });
            setPageCount(res.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        async function fetchCheckDelivered() {
            try {
                if (isLoggedIn) {
                    const url = `/review/check-delivered?customer_id=${user.id}&${
                        data.is_combo ? 'combo_id' : 'book_id'
                    }=${data.id}`;

                    const res = await axiosInstance.get(url, {
                        headers: { Authorization: 'Bearer ' + token },
                    });

                    setIsDelivered(res.is_delivered);
                }
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

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchReviews(page);
    };

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
                    {reviews.length > 0 && <Pagination pageCount={pageCount} onPageChange={handlePageChange} />}
                </div>

                {isLoggedIn && isDelivered && (
                    <ReviewForm data={data} onReviewSubmitted={() => setReviewSubmitted(true)} />
                )}
            </div>
        </div>
    );
}

export default Reviews;
