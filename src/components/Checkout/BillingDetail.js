import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserBill } from '../../redux/authSlice';

function BillingDetail() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ ...user });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        dispatch(updateUserBill({ [name]: value }));
    };

    return (
        <div className="col-md-7">
            <div className="billing-details">
                <div className="section-title">
                    <h3 className="title">Chi tiết người nhận</h3>
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
                        type="tel"
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
                <div className="form-group">
                    <div className="input-checkbox">
                        <input type="checkbox" id="create-account" />
                        <label htmlFor="create-account">
                            <span></span>
                            Tạo tài khoản?
                        </label>
                        <div className="caption">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt.
                            </p>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shiping-details">
                <div className="section-title">
                    <h3 className="title">Địa chỉ giao hàng</h3>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" id="shiping-address" />
                    <label htmlFor="shiping-address">
                        <span></span>
                        Giao tới một địa chỉ khác?
                    </label>
                    <div className="caption">
                        <div className="form-group">
                            <input className="input" type="text" name="name" placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="tel" name="tel" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <input className="input" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="input" type="text" name="address" placeholder="Địa chỉ"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-notes">
                <textarea className="input" placeholder="Ghi chú"></textarea>
            </div>
        </div>
    );
}

export default BillingDetail;
