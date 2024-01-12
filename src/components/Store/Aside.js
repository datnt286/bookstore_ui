function Aside({ categories, authors }) {
    return (
        <div id="aside" className="col-md-3">
            <form>
                <div className="aside">
                    <h3 className="aside-title">Thể loại</h3>
                    <div className="checkbox-filter">
                        {categories.map((category) => {
                            return (
                                <div key={category.id} className="input-checkbox">
                                    <input
                                        type="checkbox"
                                        name="categories"
                                        id={`category-${category.id}`}
                                        value={category.id}
                                    />
                                    <label htmlFor={`category-${category.id}`}>
                                        <span></span>
                                        {category.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="aside">
                    <h3 className="aside-title">Khoảng giá</h3>

                    <div className="radio-filter">
                        <div className="input-radio">
                            <input type="radio" name="price" id="1" value="1" />
                            <label htmlFor="1">
                                <span></span>
                                Nhỏ hơn 100.000 ₫
                            </label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" name="price" id="2" value="2" />
                            <label htmlFor="2">
                                <span></span>
                                Từ 100.000 ₫ - 300.000 ₫
                            </label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" name="price" id="3" value="3" />
                            <label htmlFor="3">
                                <span></span>
                                Từ 200.000 ₫ - 500.000 ₫
                            </label>
                        </div>

                        <div className="input-radio">
                            <input type="radio" name="price" id="4" value="4" />
                            <label htmlFor="4">
                                <span></span>
                                Lớn hơn 500.000 ₫
                            </label>
                        </div>
                    </div>
                </div>

                <div className="aside">
                    <h3 className="aside-title">Tác giả</h3>
                    <div className="checkbox-filter">
                        {authors.map((author) => {
                            return (
                                <div key={author.id} className="input-checkbox">
                                    <input
                                        type="checkbox"
                                        name="authors"
                                        id={`author-${author.id}`}
                                        value={author.id}
                                    />
                                    <label htmlFor={`author-${author.id}`}>
                                        <span></span>
                                        {author.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    <button className="primary-btn btn-aside">Áp dụng</button>
                </div>
            </form>
        </div>
    );
}

export default Aside;
