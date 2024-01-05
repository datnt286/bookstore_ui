import { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function ChangePassword() {
    const user = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        id: user.user.id,
        old_password: '',
        new_password: '',
        re_enter_password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [authenticationError, setAuthenticationError] = useState('');

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

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const resetFormData = () => {
        setFormData({
            id: user.user.id,
            old_password: '',
            new_password: '',
            re_enter_password: '',
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await axiosInstance.post('/change-password', formData, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            resetFormData();
            setAuthenticationError('');

            Swal.fire({
                icon: 'success',
                title: res.data.message,
                timer: 2000,
            });
        } catch (error) {
            if (error.response.status === 422) {
                setValidationErrors(error.response.data.errors);
                setAuthenticationError('');
            } else if (error.response.status === 401) {
                setAuthenticationError(error.response.data.message);
            } else {
                console.error('Lỗi: ', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Đổi mật khẩu không thành công!',
                    timer: 2000,
                });
            }
        }
    }

    return (
        <div id="change-password" className="tab-pane">
            <form>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="section-title text-center">
                            <h3 className="title">Đổi mật khẩu</h3>
                        </div>

                        <div className="form-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="old_password"
                                placeholder="Nhập mật khẩu cũ"
                                value={formData.old_password}
                                onChange={handleInputChange}
                                className={`form-control input ${validationErrors.old_password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback old_password-error">{validationErrors.old_password}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="new_password"
                                placeholder="Nhập mật khẩu mới"
                                value={formData.new_password}
                                onChange={handleInputChange}
                                className={`form-control input ${validationErrors.new_password ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback new_password-error">{validationErrors.new_password}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="re_enter_password"
                                placeholder="Nhập lại mật khẩu"
                                value={formData.re_enter_password}
                                onChange={handleInputChange}
                                className={`form-control input ${
                                    validationErrors.re_enter_password ? 'is-invalid' : ''
                                }`}
                            />
                            <div className="invalid-feedback re_enter_password-error">
                                {validationErrors.re_enter_password}
                            </div>
                        </div>

                        {authenticationError && (
                            <div className="alert alert-danger" role="alert">
                                {authenticationError}
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
                            <button type="submit" onClick={handleSubmit} className="primary-btn w-50">
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;
