function CommentRow({ data }) {
    return (
        <li>
            <div className="comment-heading">
                <img className="avatar" src={data.customer.avatar_image} alt="Ảnh đại diện" />
                <div>
                    <h5 className="name">{data.customer.name}</h5>
                    <p className="date">{data.comment_date}</p>
                    <span className="reply">Phản hồi</span>
                </div>
            </div>
            <div className="comment-body">
                <p>{data.content}</p>
            </div>
        </li>
    );
}

export default CommentRow;
