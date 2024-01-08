import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';

function CommentForm({ data, onCommentSubmitted }) {
    const user = useSelector((state) => state.auth.user);
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const comment = {
                customer_id: user.id,
                content: content,
                ...(data.is_combo ? { combo_id: data.id, book_id: null } : { book_id: data.id, combo_id: null }),
            };

            const res = await axiosInstance.post('/comment/create', comment);
            console.log(res.data.message);

            setContent('');
            onCommentSubmitted();
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="comment-form">
                <img className="avatar" src={user.avatar_image} alt="Ảnh đại diện" />
                <h5 className="name">Bạn</h5>
                <textarea
                    className="form-control"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder="Nhập bình luận của bạn"
                ></textarea>
                <button type="submit" className="btn-comment">
                    Đăng
                </button>
            </div>
        </form>
    );
}

export default CommentForm;
