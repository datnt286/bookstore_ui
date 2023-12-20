function Filter() {
    return (
        <div className="store-filter clearfix">
            <div className="store-sort">
                <label>
                    Sắp xếp theo:
                    <select className="input-select">
                        <option value="0">Bán chạy</option>
                        <option value="1">Mới nhất</option>
                    </select>
                </label>

                <label>
                    Hiển thị:
                    <select className="input-select">
                        <option value="0">20</option>
                        <option value="1">50</option>
                    </select>
                </label>
            </div>
            <ul className="store-grid">
                <li className="active">
                    <i className="fa fa-th"></i>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-th-list"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
