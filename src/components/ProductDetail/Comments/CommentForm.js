import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import Swal from 'sweetalert2';

function CommentForm({ data, parent_id, onCommentSubmitted }) {
    const user = useSelector((state) => state.auth.user);
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const comment = {
                customer_id: user.id,
                content: content,
                parent_id: parent_id,
                ...(data.is_combo ? { combo_id: data.id, book_id: null } : { book_id: data.id, combo_id: null }),
            };

            const res = await axiosInstance.post('/comment/create', comment);
            console.log(res.data.message);

            setContent('');
            onCommentSubmitted();
        } catch (error) {
            if (error.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    timer: 3000,
                });
            } else {
                console.error('Lỗi: ', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`comment-form ${parent_id ? 'reply-form' : ''}`}>
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
