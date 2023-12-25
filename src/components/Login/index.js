import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginSuccess } from '../../redux/authSlice';
import Swal from 'sweetalert2';

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(`${apiDomain}/login`, formData);

            const userData = await axios.get(`${apiDomain}/me`, {
                headers: { Authorization: 'Bearer ' + res.data.access_token },
            });

            dispatch(loginSuccess({ token: res.data.access_token, user: userData.data }));

            navigate('/');

            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                timer: 2000,
            });
        } catch (error) {
            dispatch(loginFailure('Sai tên đăng nhập hoặc mật khẩu!'));
        }
    };
    return (
        <div id="login" className="section">
            <div className="container">
                <form onSubmit={handleLogin}>
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
};

export default Login;
