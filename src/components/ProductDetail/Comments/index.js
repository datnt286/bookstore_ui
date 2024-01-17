import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../services/axiosInstance';
import CommentForm from './CommentForm';
import CommentRow from './CommentRow';
import Pagination from '../../Pagination';

function Comments({ data }) {
    const isLoggedIn = useSelector((state) => state.auth.token !== null);
    const [comments, setComments] = useState([]);
    const [commentSubmitted, setCommentSubmitted] = useState(false);
    const [pageCount, setPageCount] = useState(1);

    const fetchComments = async (page = 1) => {
        try {
            const params = data.is_combo ? { combo_id: data.id, page } : { book_id: data.id, page };
            const res = await axiosInstance.get('comment/comments-by-product-id', { params });

            setComments(res.data.comments);
            setPageCount(res.data.total_pages);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    useEffect(() => {
        if (commentSubmitted) {
            fetchComments();
            setCommentSubmitted(false);
        }

        fetchComments();
    }, [data.is_combo, data.id, commentSubmitted]);

    const handlePageChange = ({ selected }) => {
        const page = selected + 1;
        fetchComments(page);
    };

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
            {comments.length > 0 && <Pagination pageCount={pageCount} onPageChange={handlePageChange} />}
        </div>
    );
}

export default Comments;
