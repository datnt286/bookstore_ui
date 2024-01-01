function Filter() {
    return (
        <div className="store-filter clearfix">
            <div className="store-sort">
                <label>Sắp xếp theo:</label>
                <select className="input-select form-control">
                    <option value="0">Bán chạy</option>
                    <option value="1">Mới nhất</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
