import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_enter_password: '',
        phone: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await axios.post(`${apiDomain}/register`, formData);

            navigate('/dang-nhap');

            Swal.fire({
                icon: 'success',
                title: res.data.message,
                timer: 2000,
            });
        } catch (error) {
            console.error('Lỗi: ', error);

            Swal.fire({
                icon: 'error',
                title: 'Đăng ký thất bại!',
                timer: 2000,
            });
        }
    }

    return (
        <div id="register" className="section">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <div className="section-title text-center">
                                <h3 className="title">Đăng ký</h3>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleInputChange}
                                    placeholder="Tên đăng nhập"
                                    className="form-control input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="Mật khẩu"
                                    className="form-control input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="re_enter_password"
                                    onChange={handleInputChange}
                                    placeholder="Nhập lại mật khẩu"
                                    className="form-control input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Điện thoại"
                                    onChange={handleInputChange}
                                    className="form-control input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                    className="form-control input"
                                />
                            </div>
                            <div className="input-checkbox my-4">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">
                                    <span></span>
                                    Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                                </label>
                            </div>
                            <div className="text-center my-4">
                                <button className="primary-btn w-100">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
