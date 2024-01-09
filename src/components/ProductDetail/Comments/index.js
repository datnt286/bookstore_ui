import { useEffect, useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import CommentForm from './CommentForm';
import CommentRow from './CommentRow';

function Comments({ data }) {
    const [comments, setComments] = useState(data.comments || []);
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    useEffect(() => {
        async function fetchComments() {
            try {
                const params = data.is_combo ? { combo_id: data.id } : { book_id: data.id };
                const res = await axiosInstance.get('comment/get-comments-by-product-id', { params });
                setComments(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        if (commentSubmitted) {
            fetchComments();
            setCommentSubmitted(false);
        }

        fetchComments();
    }, [commentSubmitted, data.is_combo, data.id]);

    return (
        <div id="comments" className="tab-pane fade in">
            <CommentForm data={data} parent_id={null} onCommentSubmitted={() => setCommentSubmitted(true)} />
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment, index) => {
                        return (
                            <CommentRow
                                key={index}
                                data={data}
                                comment={comment}
                                setCommentSubmitted={setCommentSubmitted}
                            />
                        );
                    })
                ) : (
                    <p>Không có bình luận nào.</p>
                )}
            </ul>
        </div>
    );
}

export default Comments;
