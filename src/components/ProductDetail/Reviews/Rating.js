function Rating({
    data,
    totalReviews,
    count1StarReviews,
    count2StarsReviews,
    count3StarsReviews,
    count4StarsReviews,
    count5StarsReviews,
}) {
    const width1Star = (count1StarReviews / totalReviews) * 100;
    const width2Stars = (count2StarsReviews / totalReviews) * 100;
    const width3Stars = (count3StarsReviews / totalReviews) * 100;
    const width4Stars = (count4StarsReviews / totalReviews) * 100;
    const width5Stars = (count5StarsReviews / totalReviews) * 100;

    return (
        <div className="col-md-3">
            <div id="rating">
                <div className="rating-avg">
                    <span>{data.average_rating || 0.0}</span>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={index + 1 <= data.average_rating ? 'fa fa-star' : 'fa fa-star-o empty'}
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

                        <span className="sum">{count5StarsReviews}</span>
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
                        <span className="sum">{count4StarsReviews}</span>
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
                        <span className="sum">{count3StarsReviews}</span>
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
                        <span className="sum">{count2StarsReviews}</span>
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
                        <span className="sum">{count1StarReviews}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rating;
