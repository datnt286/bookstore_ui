import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_enter_password: '',
        phone: '',
        email: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [reEnterPasswordError, setReEnterPasswordError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setValidationErrors({
            ...validationErrors,
            [name]: '',
        });
    };

    async function handleRegister(event) {
        event.preventDefault();

        try {
            const res = await axiosInstance.post('/register', formData);

            navigate('/dang-nhap');

            Swal.fire({
                icon: 'success',
                title: res.message,
                timer: 2000,
            });
        } catch (error) {
            if (error.response.status === 422) {
                setValidationErrors(error.response.data.errors);
                setReEnterPasswordError('');
            } else if (error.response.status === 401) {
                setReEnterPasswordError(error.response.data.message);
            } else {
                console.error('Lỗi: ', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Đăng ký không thành công!',
                    timer: 2000,
                });
            }
        }
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div id="register" className="section d-flex justify-content-center align-items-center">
            <div className="container">
                <form onSubmit={handleRegister}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5">
                            <div className="form-register">
                                <div className="section-title text-center">
                                    <h3 className="title">Đăng ký</h3>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleInputChange}
                                        placeholder="Tên đăng nhập"
                                        className={`form-control input ${
                                            validationErrors.username ? 'is-invalid' : ''
                                        }`}
                                    />
                                    <div className="invalid-feedback username-error">{validationErrors.username}</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        onChange={handleInputChange}
                                        placeholder="Mật khẩu"
                                        className={`form-control input ${
                                            validationErrors.password ? 'is-invalid' : ''
                                        }`}
                                    />
                                    <div className="invalid-feedback password-error">{validationErrors.password}</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="re_enter_password"
                                        onChange={handleInputChange}
                                        placeholder="Nhập lại mật khẩu"
                                        className={`form-control input ${
                                            validationErrors.re_enter_password ? 'is-invalid' : ''
                                        }`}
                                    />
                                    <div className="invalid-feedback re_enter_password-error">
                                        {validationErrors.re_enter_password}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Điện thoại"
                                        onChange={handleInputChange}
                                        className={`form-control input ${validationErrors.phone ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback phone-error">{validationErrors.phone}</div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleInputChange}
                                        className={`form-control input ${validationErrors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback email-error">{validationErrors.email}</div>
                                </div>

                                {reEnterPasswordError && (
                                    <div className="alert alert-danger" role="alert">
                                        {reEnterPasswordError}
                                    </div>
                                )}

                                <div className="d-flex justify-content-center">
                                    <div className="input-checkbox">
                                        <input type="checkbox" onChange={handleCheckboxChange} id="terms" />
                                        <label htmlFor="terms">
                                            <span></span>
                                            Hiện mật khẩu
                                        </label>
                                    </div>
                                </div>

                                <div className="text-center my-4">
                                    <button type="submit" className="primary-btn w-100">
                                        Đăng ký
                                    </button>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <span>Đã có tài khoản?</span>
                                    <Link to="/dang-nhap" className="login-link">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
