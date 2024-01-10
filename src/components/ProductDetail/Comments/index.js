import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../services/axiosInstance';
import CommentForm from './CommentForm';
import CommentRow from './CommentRow';

function Comments({ data }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
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
            {isLoggedIn ? (
                <CommentForm data={data} parent_id={null} onCommentSubmitted={() => setCommentSubmitted(true)} />
            ) : (
                <div className="d-flex justify-content-center mb-2">
                    <p>Đăng nhập để bình luận.</p>
                    <Link to="/dang-nhap" className="comment-link">
                        Đăng nhập
                    </Link>
                </div>
            )}
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
                    <p className="text-center mt-3">Chưa có bình luận.</p>
                )}
            </ul>
        </div>
    );
}

export default Comments;
