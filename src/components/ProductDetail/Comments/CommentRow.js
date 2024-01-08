import { useState } from 'react';
import CommentForm from './CommentForm';

function CommentRow({ data, comment }) {
    const [isReplying, setIsReplying] = useState(false);
    const parent_id = comment.parent_id ? comment.parent_id : comment.id;

    const toggleReplyForm = () => {
        setIsReplying(!isReplying);
    };

    return (
        <>
            <li className={isReplying ? 'replying' : ''}>
                <div className="comment-heading">
                    <img className="avatar" src={comment.customer.avatar_image} alt="Ảnh đại diện" />
                    <div>
                        <h5 className="name">{comment.customer.name}</h5>
                        <p className="date">{comment.comment_date}</p>
                        <span className="reply" onClick={toggleReplyForm}>
                            Phản hồi
                        </span>
                    </div>
                </div>
                <div className="comment-body">
                    <p>{comment.content}</p>
                </div>
            </li>

            {comment.replys &&
                comment.replys.map((reply, index) => {
                    return <CommentRow key={index} data={data} comment={reply} />;
                })}

            {isReplying && (
                <CommentForm data={data} parent_id={parent_id} onCommentSubmitted={() => setIsReplying(false)} />
            )}
        </>
    );
}

export default CommentRow;
