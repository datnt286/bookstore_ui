import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function ChangePassword() {
    const user = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({});

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
            const res = await axios.post('http://127.0.0.1:8000/api/change-password', formData, {
                headers: { Authorization: 'Bearer ' + user.token },
            });

            // window.location.reload(false);

            console.log('Status: ', res.data);
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    }
    return (
        <div id="change-password" class="tab-pane">
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
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="new_password"
                                placeholder="Nhập mật khẩu mới"
                                onChange={handleInputChange}
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="re_enter_password"
                                placeholder="Nhập lại mật khẩu"
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
