import { useState } from 'react';
import CommentForm from './CommentForm';

function CommentRow({ data, comment, setCommentSubmitted }) {
    const [isReplying, setIsReplying] = useState(false);
    const parent_id = comment.parent_id ? comment.parent_id : comment.id;

    const toggleReplyForm = () => {
        setIsReplying(!isReplying);
    };

    return (
        <>
            <li className={`comment-row ${isReplying ? 'replying' : ''}`}>
                <div className="comment-heading">
                    <img className="avatar" src={comment.customer.avatar_image} alt="Ảnh đại diện" />
                    <div className="comment-user">
                        <h5 className="name">{comment.customer.name}</h5>
                        <p className="date">{comment.comment_date}</p>
                        <span className="btn-reply" onClick={toggleReplyForm}>
                            Phản hồi
                        </span>
                    </div>
                </div>
                <div className={`comment-body ${comment.parent_id ? 'reply-body' : ''}`}>
                    <p>{comment.content}</p>
                </div>
            </li>

            {isReplying && (
                <CommentForm
                    data={data}
                    parent_id={parent_id}
                    onCommentSubmitted={() => {
                        setIsReplying(false);
                        setCommentSubmitted(true);
                    }}
                />
            )}

            {comment.replys &&
                comment.replys.map((reply, index) => {
                    return (
                        <CommentRow key={index} data={data} comment={reply} setCommentSubmitted={setCommentSubmitted} />
                    );
                })}
        </>
    );
}

export default CommentRow;
