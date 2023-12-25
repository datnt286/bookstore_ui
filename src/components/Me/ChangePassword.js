import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

function ChangePassword() {
    const user = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        id: user.user.id,
        old_password: '',
        new_password: '',
        re_enter_password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
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
            const res = await axios.post(`${apiDomain}/change-password`, formData, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            resetFormData();

            Swal.fire({
                icon: 'success',
                title: res.data.message,
                timer: 2000,
            });
        } catch (error) {
            console.error('Lỗi: ', error);

            Swal.fire({
                icon: 'error',
                title: 'Đổi mật khẩu thất bại!',
                timer: 2000,
            });
        }
    }
    return (
        <div id="change-password" className="tab-pane">
            <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="section-title text-center">
                            <h3 className="title">Đổi mật khẩu</h3>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="old_password"
                                placeholder="Nhập mật khẩu cũ"
                                value={formData.old_password}
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="new_password"
                                placeholder="Nhập mật khẩu mới"
                                value={formData.new_password}
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="re_enter_password"
                                placeholder="Nhập lại mật khẩu"
                                value={formData.re_enter_password}
                                onChange={handleInputChange}
                                className="input"
                            />
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

export default ChangePassword;
