function ReviewRow({ data }) {
    return (
        <li>
            <div className="review-heading">
                <img className="avatar" src={data.customer.avatar_image} alt="Ảnh đại diện" />
                <div>
                    <h5 className="name">{data.customer.name}</h5>
                    <p className="date">{data.review_date}</p>
                    <div className="review-rating">
                        {[...Array(5)].map((_, index) => (
                            <i
                                key={index}
                                className={index + 1 <= data.rating ? 'fa fa-star' : 'fa fa-star-o empty'}
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
            <div className="review-body">
                <p>{data.content}</p>
            </div>
        </li>
    );
}

export default ReviewRow;
