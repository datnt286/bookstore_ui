function ReviewRow({ data }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starClass = i <= data.rating ? 'fa fa-star' : 'fa fa-star-o empty';
        stars.push(<i key={i} className={starClass}></i>);
    }

    return (
        <li>
            <div className="review-heading">
                <img className="avatar" src={data.customer.avatar_image} alt="Ảnh đại diện" />
                <div>
                    <h5 className="name">{data.customer.name}</h5>
                    <p className="date">{data.review_date}</p>
                    <div className="review-rating">{stars}</div>
                </div>
            </div>
            <div className="review-body">
                <p>{data.content}</p>
            </div>
        </li>
    );
}

export default ReviewRow;
