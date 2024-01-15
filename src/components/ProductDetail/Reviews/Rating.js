function Rating({ averageRating, totalReviews, reviewStats }) {
    const width1Star = (reviewStats.count1Star / totalReviews) * 100;
    const width2Stars = (reviewStats.count2Stars / totalReviews) * 100;
    const width3Stars = (reviewStats.count3Stars / totalReviews) * 100;
    const width4Stars = (reviewStats.count4Stars / totalReviews) * 100;
    const width5Stars = (reviewStats.count5Stars / totalReviews) * 100;

    return (
        <div className="col-md-3">
            <div id="rating">
                <div className="rating-avg">
                    <span>{averageRating || 0.0}</span>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={index + 1 <= averageRating ? 'fa fa-star' : 'fa fa-star-o empty'}
                            ></i>
                        ))}
                    </div>
                    <span>({totalReviews})</span>
                </div>

                <ul className="rating">
                    <li>
                        <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>

                        <div className="rating-progress">
                            <div style={{ width: `${width5Stars}%` }}></div>
                        </div>

                        <span className="sum">{reviewStats.count5Stars}</span>
                    </li>
                    <li>
                        <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <div className="rating-progress">
                            <div style={{ width: `${width4Stars}%` }}></div>
                        </div>
                        <span className="sum">{reviewStats.count4Stars}</span>
                    </li>
                    <li>
                        <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <div className="rating-progress">
                            <div style={{ width: `${width3Stars}%` }}></div>
                        </div>
                        <span className="sum">{reviewStats.count3Stars}</span>
                    </li>
                    <li>
                        <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <div className="rating-progress">
                            <div style={{ width: `${width2Stars}%` }}></div>
                        </div>
                        <span className="sum">{reviewStats.count2Stars}</span>
                    </li>
                    <li>
                        <div className="rating-stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <div className="rating-progress">
                            <div style={{ width: `${width1Star}%` }}></div>
                        </div>
                        <span className="sum">{reviewStats.count1Star}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rating;
