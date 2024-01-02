import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/authSlice';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Account() {
    const user = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ ...user.user });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await axiosInstance.post('/update', formData, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            const userData = await axiosInstance.get('/me', {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            dispatch(updateUser({ userData: userData.data }));

            Swal.fire({
                icon: 'success',
                title: res.data.message,
                timer: 2000,
            });
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Lỗi: ', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Cập nhật thông tin không thành công!',
                    timer: 2000,
                });
            }
        }
    }

    return (
        <div id="account" className="active tab-pane">
            <form>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="section-title text-center">
                            <h3 className="title">Thông tin tài khoản</h3>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                value={user.user.username}
                                placeholder="Tên đăng nhập"
                                className="form-control input"
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Tên"
                                className={`form-control input ${errors.name ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback name-error">{errors.name}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Điện thoại"
                                className={`form-control input ${errors.phone ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback phone-error">{errors.phone}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className={`form-control input ${errors.email ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback email-error">{errors.email}</div>
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Địa chỉ"
                                className={`form-control input ${errors.address ? 'is-invalid' : ''}`}
                            ></textarea>
                            <div className="invalid-feedback address-error">{errors.address}</div>
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

export default Account;
