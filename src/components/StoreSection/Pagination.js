function Pagination() {
    return (
        <div className="store-filter clearfix">
            <span className="store-qty">Hiển thị 20-100 sản phẩm</span>
            <ul className="store-pagination">
                <li className="active">1</li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">4</a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
