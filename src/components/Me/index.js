import Account from './Account';
import ChangePassword from './ChangePassword';

function Me() {
    return (
        <div id="me" className="section">
            <div className="container">
                <div className="card card-primary card-outline">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a href="#account" className="nav-link" data-toggle="tab">
                                    Tài khoản
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#change-password" className="nav-link" data-toggle="tab">
                                    Đổi mật khẩu
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="card-body align-middle">
                        <div className="tab-content">
                            <Account />
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Me;
