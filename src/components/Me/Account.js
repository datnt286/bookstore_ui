import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/authSlice';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function Account() {
    const auth = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ ...auth.user });
    const [selectedAvatar, setSelectedAvatar] = useState(null);
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

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedAvatar(reader.result);
            };

            reader.readAsDataURL(file);

            setFormData((prevFormData) => ({
                ...prevFormData,
                avatar: file,
            }));

            setErrors({
                ...errors,
                avatar: '',
            });
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await axiosInstance.post('/update', formData, {
                headers: {
                    Authorization: 'Bearer ' + auth.token,
                    'Content-Type': 'multipart/form-data',
                },
            });

            const newUser = await axiosInstance.get('/me', {
                headers: { Authorization: 'Bearer ' + auth.token },
            });

            delete newUser.avatar;

            dispatch(updateUser({ newUser: newUser }));

            Swal.fire({
                icon: 'success',
                title: res.message,
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row d-flex justify-content-center">
                    <div className="section-title text-center">
                        <h3 className="title">Thông tin tài khoản</h3>
                    </div>
                    <div className="col-md-2">
                        <div className="text-center">
                            <img
                                src={selectedAvatar || auth.user.avatar_path}
                                alt="Ảnh đại diện"
                                className="avatar-img"
                            />
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                className={`d-none ${errors.avatar ? 'is-invalid' : ''}`}
                                onChange={handleAvatarChange}
                            ></input>
                            <div className="invalid-feedback avatar-error">{errors.avatar}</div>
                            <label htmlFor="avatar" className="btn btn-secondary my-3">
                                Chọn ảnh
                            </label>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                value={auth.user.username}
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
                                placeholder="Họ tên"
                                className={`form-control input ${errors.name ? 'is-invalid' : ''}`}
                                onChange={handleInputChange}
                            />
                            <div className="invalid-feedback name-error">{errors.name}</div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                placeholder="Điện thoại"
                                className={`form-control input ${errors.phone ? 'is-invalid' : ''}`}
                                onChange={handleInputChange}
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
                    </div>
                    <div className="text-center my-4">
                        <button type="submit" className="primary-btn w-25">
                            Lưu
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Account;
