function Rating() {
    return (
        <div className="col-md-3">
            <div id="rating">
                <div className="rating-avg">
                    <span>4.5</span>
                    <div className="rating-stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
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
                            <div style={{ width: '80%' }}></div>
                        </div>
                        <span className="sum">3</span>
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
                            <div style={{ width: '60%' }}></div>
                        </div>
                        <span className="sum">2</span>
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
                            <div></div>
                        </div>
                        <span className="sum">0</span>
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
                            <div></div>
                        </div>
                        <span className="sum">0</span>
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
                            <div></div>
                        </div>
                        <span className="sum">0</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rating;
