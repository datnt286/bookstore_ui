import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import CommentForm from './CommentForm';

function CommentRow({ data, comment, setCommentSubmitted }) {
    const user = useSelector((state) => state.auth.user);
    const [isReplying, setIsReplying] = useState(false);
    const parent_id = comment.parent_id ? comment.parent_id : comment.id;

    const toggleReplyForm = () => {
        setIsReplying(!isReplying);
    };

    const handleDelete = async (id) => {
        try {
            const res = await axiosInstance.get(`/comment/destroy/${id}`);
            console.log(res.data.message);

            setCommentSubmitted(true);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    return (
        <>
            <li className={`comment-row ${isReplying ? 'reply-row' : ''}`}>
                <div className="comment-heading">
                    <img className="avatar" src={comment.customer.avatar_path} alt="Ảnh đại diện" />
                    <div className="comment-user">
                        <h5 className="name">{comment.customer.name}</h5>
                        <p className="date">{comment.comment_date}</p>
                        <span className="btn-reply" onClick={toggleReplyForm}>
                            Phản hồi
                        </span>
                        {user && user.id === comment.customer_id && (
                            <span className="btn-detete-comment" onClick={() => handleDelete(comment.id)}>
                                Xoá
                            </span>
                        )}
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

            {comment.replies &&
                comment.replies.map((reply, index) => {
                    return (
                        <CommentRow key={index} data={data} comment={reply} setCommentSubmitted={setCommentSubmitted} />
                    );
                })}
        </>
    );
}

export default CommentRow;
