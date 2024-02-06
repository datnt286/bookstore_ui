import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/axiosInstance';
import Swal from 'sweetalert2';

function CommentForm({ data, parent_id, onCommentSubmitted }) {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const comment = {
                customer_id: user.id,
                content: content,
                parent_id: parent_id,
                ...(data.is_combo ? { combo_id: data.id, book_id: null } : { book_id: data.id, combo_id: null }),
            };

            const res = await axiosInstance.post('/comment/create', comment, {
                headers: { Authorization: 'Bearer ' + token },
            });

            console.log(res.message);

            setContent('');
            setError('');
            onCommentSubmitted();
        } catch (error) {
            if (error.response.status === 422) {
                setError(error.response.data.message);
            } else if (error.response.status === 403) {
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
                <img className="avatar" src={user.avatar_path} alt="Ảnh đại diện" />
                <h5 className="name">Bạn</h5>
                <textarea
                    className="form-control"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    placeholder={error ? `${error}` : 'Nhập bình luận của bạn'}
                ></textarea>
                <button type="submit" className="btn-comment">
                    Đăng
                </button>
            </div>
        </form>
    );
}

export default CommentForm;
