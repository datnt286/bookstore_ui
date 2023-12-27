function Aside() {
    return (
        <div id="aside" className="col-md-3">
            <div className="aside">
                <h3 className="aside-title">Thể loại</h3>
                <div className="checkbox-filter">
                    <div className="input-checkbox">
                        <input type="checkbox" id="category-1" />
                        <label htmlFor="category-1">
                            <span></span>
                            Laptops
                            <small>(120)</small>
                        </label>
                    </div>

                    <div className="input-checkbox">
                        <input type="checkbox" id="category-2" />
                        <label htmlFor="category-2">
                            <span></span>
                            Smartphones
                            <small>(740)</small>
                        </label>
                    </div>

                    <div className="input-checkbox">
                        <input type="checkbox" id="category-3" />
                        <label htmlFor="category-3">
                            <span></span>
                            Cameras
                            <small>(1450)</small>
                        </label>
                    </div>

                    <div className="input-checkbox">
                        <input type="checkbox" id="category-4" />
                        <label htmlFor="category-4">
                            <span></span>
                            Accessories
                            <small>(578)</small>
                        </label>
                    </div>

                    <div className="input-checkbox">
                        <input type="checkbox" id="category-5" />
                        <label htmlFor="category-5">
                            <span></span>
                            Laptops
                            <small>(120)</small>
                        </label>
                    </div>

                    <div className="input-checkbox">
                        <input type="checkbox" id="category-6" />
                        <label htmlFor="category-6">
                            <span></span>
                            Smartphones
                            <small>(740)</small>
                        </label>
                    </div>
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
                <h3 className="aside-title">Brand</h3>
                <div className="checkbox-filter">
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-1" />
                        <label htmlFor="brand-1">
                            <span></span>
                            SAMSUNG
                            <small>(578)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-2" />
                        <label htmlFor="brand-2">
                            <span></span>
                            LG
                            <small>(125)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-3" />
                        <label htmlFor="brand-3">
                            <span></span>
                            SONY
                            <small>(755)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-4" />
                        <label htmlFor="brand-4">
                            <span></span>
                            SAMSUNG
                            <small>(578)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-5" />
                        <label htmlFor="brand-5">
                            <span></span>
                            LG
                            <small>(125)</small>
                        </label>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" id="brand-6" />
                        <label htmlFor="brand-6">
                            <span></span>
                            SONY
                            <small>(755)</small>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;
