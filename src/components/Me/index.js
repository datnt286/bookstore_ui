import Account from './Account';
import ChangePassword from './ChangePassword';

function Me() {
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);

    return (
        <div id="me" className="section">
            <div className="container">
                <div class="card card-primary card-outline">
                    <div class="card-header p-2">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <a href="#account" class="nav-link" data-toggle="tab">
                                    Tài khoản
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#change-password" class="nav-link" data-toggle="tab">
                                    Đổi mật khẩu
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="card-body align-middle">
                        <div class="tab-content">
                            <Account user={user} />

                            <ChangePassword user={user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Me;
