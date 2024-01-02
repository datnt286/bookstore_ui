function Order() {
    return (
        <div id="me" className="section">
            <div className="container">
                <div className="card card-primary card-outline">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a href="#ordered" className="nav-link" data-toggle="tab">
                                    Đã đặt
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#confirmed" className="nav-link" data-toggle="tab">
                                    Đã xác nhận
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#delivering" className="nav-link" data-toggle="tab">
                                    Đang giao
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#delivered" className="nav-link" data-toggle="tab">
                                    Đã giao
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#canceled" className="nav-link" data-toggle="tab">
                                    Đã huỷ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="card-body align-middle">
                        <div className="tab-content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
