import axios from 'axios';
import { useState } from 'react';

function Account({ user }) {
    const [formData, setFormData] = useState({
        ...user,
    });

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
            const res = await axios.post('http://127.0.0.1:8000/api/update', formData, {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            });

            localStorage.setItem('userData', JSON.stringify(formData));
            // window.location.reload(false);

            console.log('Status: ', res.data);
        } catch (error) {
            console.error('Lỗi: ', error);
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
                                value={user.username}
                                placeholder="Tên đăng nhập"
                                className="input"
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                placeholder="Tên"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="tel"
                                value={user.phone}
                                onChange={handleInputChange}
                                placeholder="Điện thoại"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                name="address"
                                value={user.address}
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
