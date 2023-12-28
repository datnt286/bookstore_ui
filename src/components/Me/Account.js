import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/authSlice';
import Swal from 'sweetalert2';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function Account() {
    const user = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ ...user.user });
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await axios.post(`${apiDomain}/update`, formData, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            const userData = await axios.get(`${apiDomain}/me`, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            dispatch(updateUser({ userData: userData.data }));

            Swal.fire({
                icon: 'success',
                title: res.data.message,
                timer: 2000,
            });
        } catch (error) {
            console.error('Lỗi: ', error);

            Swal.fire({
                icon: 'error',
                title: 'Cập nhật thông tin không thành công!',
                timer: 2000,
            });
        }
    }

    return (
        <div id="account" className="active tab-pane">
            <form onSubmit={handleSubmit}>
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
                                className="input"
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
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Điện thoại"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Địa chỉ"
                                className="input"
                            ></textarea>
                        </div>
                        <div className="text-center my-4">
                            <button type="submit" className="primary-btn w-50">
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
