function ReviewForm() {
    return (
        <div className="col-md-3">
            <div id="review-form">
                <form className="review-form">
                    <textarea placeholder="Bình luận" className="form-control input"></textarea>
                    <div className="input-rating">
                        <span>Đánh giá: </span>
                        <div className="stars">
                            <input id="star5" name="rating" value="5" type="radio" />
                            <label htmlFor="star5"></label>
                            <input id="star4" name="rating" value="4" type="radio" />
                            <label htmlFor="star4"></label>
                            <input id="star3" name="rating" value="3" type="radio" />
                            <label htmlFor="star3"></label>
                            <input id="star2" name="rating" value="2" type="radio" />
                            <label htmlFor="star2"></label>
                            <input id="star1" name="rating" value="1" type="radio" />
                            <label htmlFor="star1"></label>
                        </div>
                    </div>
                    <button className="primary-btn">Đăng</button>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
