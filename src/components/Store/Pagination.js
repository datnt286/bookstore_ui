function Pagination() {
    return (
        <div className="store-filter clearfix d-flex justify-content-center">
            <ul className="store-pagination">
                <li>
                    <a href="#">
                        <i class="fa fa-angle-left"></i>
                    </a>
                </li>
                <li className="active">1</li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">...</a>
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
