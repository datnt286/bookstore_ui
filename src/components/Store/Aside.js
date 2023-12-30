function Aside({ categories, authors }) {
    return (
        <div id="aside" className="col-md-3">
            <div className="aside">
                <h3 className="aside-title">Thể loại</h3>
                <div className="checkbox-filter">
                    {categories.map((category) => {
                        return (
                            <div key={category.id} className="input-checkbox">
                                <input type="checkbox" name={category.id} id={`category-${category.id}`} />
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
                <div className="price-filter">
                    <div id="price-slider"></div>
                    <div className="input-number price-min">
                        <input id="price-min" type="number" className="form-control" />
                        <span className="qty-up">+</span>
                        <span className="qty-down">-</span>
                    </div>
                    <span>-</span>
                    <div className="input-number price-max">
                        <input id="price-max" type="number" className="form-control" />
                        <span className="qty-up">+</span>
                        <span className="qty-down">-</span>
                    </div>
                </div>
            </div>

            <div className="aside">
                <h3 className="aside-title">Tác giả</h3>
                <div className="checkbox-filter">
                    {authors.map((author) => {
                        return (
                            <div key={author.id} className="input-checkbox">
                                <input type="checkbox" name={author.id} id={`author-${author.id}`} />
                                <label htmlFor={`author-${author.id}`}>
                                    <span></span>
                                    {author.name}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Aside;
