function ProductDetail({data}) {
    return (
        <>
            <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div id="product-preview" className="product-preview">
                        <img src="./dac-nhan-tam.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="col-md-2  col-md-pull-5">
                <div id="product-imgs">
                    <div className="product-preview">
                        <img src="./dac-nhan-tam.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <div className="product-details">
                    <h2 className="product-name">{data.name}</h2>

                    <div>
                        <div className="product-rating mt-3">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <a className="review-link" href="#">
                            10 Đánh giá | Thêm đánh giá
                        </a>
                    </div>

                    <ul className="product-links">
                        <li>Thể loại:</li>
                        <li>
                            <a href="#">Sách tự sự</a>
                        </li>
                    </ul>

                    <ul className="product-links">
                        <li>Tác giả:</li>
                        <li>
                            <a href="#">Dale Carnegie</a>
                        </li>
                    </ul>

                    <div>
                        <h3 className="product-price">
                            {data.price} <del className="product-old-price">$990.00</del>
                        </h3>
                    </div>

                    <div className="add-to-cart">
                        <div className="qty-label d-block mt-4">
                            <span className="mx-4">Số lượng</span>
                            <div className="input-number">
                                <input type="number" />
                                <span className="qty-down">-</span>
                                <span className="qty-up">+</span>
                            </div>
                        </div>
                        <div>
                            <button className="add-to-cart-btn mt-4">
                                <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                        <div>
                            <button className="add-to-cart-btn mt-4">
                                <i className="fa fa-heart-o"></i> Thêm vào wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
