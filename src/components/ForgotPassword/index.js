import { useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axiosInstance.post('/reset-password', { email });

            Swal.fire({
                icon: 'success',
                title: res.data.message,
            });
        } catch (error) {
            console.error('Lỗi: ', error);

            if (error.response.status === 404) {
                var message = error.response.data.message;
            }

            Swal.fire({
                icon: 'error',
                title: message || 'Đã xảy ra lỗi. Vui lòng thử lại sau!',
            });
        }
    };

    return (
        <div id="forgot-password" className="section">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h3 className="title">Quên mật khẩu</h3>
                            </div>

                            <div className="d-flex align-items-center justify-content-between">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    placeholder="Nhập email của bạn"
                                    className="form-control input"
                                />
                                <button type="submit" className="primary-btn btn-forgot-password mx-4">
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
