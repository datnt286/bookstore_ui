import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import Rating from './Rating';
import ReviewRow from './ReviewRow';
import ReviewForm from './ReviewForm';

function Reviews({ data }) {
    const user = useSelector((state) => state.auth.user);
    const [isDelivered, setIsDelivered] = useState(false);

    useEffect(() => {
        async function fetchCheckDelivered() {
            try {
                const params = {
                    customer_id: user.id,
                    [data.is_combo ? 'combo_id' : 'book_id']: data.id,
                };

                const res = await axiosInstance.get('/order/check-delivered', { params });
                setIsDelivered(res.data.is_delivered);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchCheckDelivered();
    }, [data.id, user.id, data.is_combo]);

    return (
        <div id="reviews" className="tab-pane fade in">
            <div className="row">
                <Rating />

                <div className="col-md-6">
                    <div id="reviews">
                        {data.reviews > 0 ? (
                            <>
                                <ul className="reviews">
                                    {data.reviews &&
                                        data.reviews.map((review, index) => {
                                            return <ReviewRow key={index} data={review} />;
                                        })}
                                </ul>
                                <ul className="reviews-pagination">
                                    <li className="active">1</li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <p className="text-center">Chưa có đánh giá.</p>
                        )}
                    </div>
                </div>

                {isDelivered && <ReviewForm data={data}/>}
            </div>
        </div>
    );
}

export default Reviews;
