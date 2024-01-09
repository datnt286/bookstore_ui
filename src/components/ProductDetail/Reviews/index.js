import Rating from './Rating';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function Reviews({ data }) {
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
                            <p>Chưa có đánh giá.</p>
                        )}
                    </div>
                </div>

                <ReviewForm />
            </div>
        </div>
    );
}

export default Reviews;
