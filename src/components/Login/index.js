import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
            const res = await axios.post('http://127.0.0.1:8000/api/login', formData);

            localStorage.setItem('token', res.data.access_token);

            const userData = await axios.get('http://127.0.0.1:8000/api/me', {
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            });

            if (localStorage.getItem('token')) {
                localStorage.setItem('userData', JSON.stringify(userData.data));
                navigate('/');
            }
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    }

    return (
        <div id="login" className="section">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <div className="section-title text-center">
                                <h3 className="title">Đăng nhập</h3>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleInputChange}
                                    placeholder="Tên đăng nhập"
                                    className="input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    placeholder="Mật khẩu"
                                    className="input"
                                />
                            </div>
                            <div className="text-center my-4">
                                <button type="submit" className="primary-btn w-100">
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn-facebook w-100">Đăng nhập Facebook</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn-google w-100">Đăng nhập Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
