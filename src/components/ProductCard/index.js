import { NavLink } from 'react-router-dom';

function ProductCard() {
    return (
        <div className="col-md-3 col-xs-6">
            <div className="product">
                <NavLink to={`/slug`}>
                    <div className="product-img text-center">
                        <img src="./dac-nhan-tam.jpg" alt="" className="product-image" />
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category">Sách tự lực</p>
                        <h3 className="product-name">
                            <a href="#">Đắc nhân tâm</a>
                        </h3>
                        <h4 className="product-price">
                            $980.00 <del className="product-old-price">$990.00</del>
                        </h4>
                        <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product-btns">
                            <button className="add-to-wishlist">
                                <i className="fa fa-heart-o"></i>
                                <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                                <i className="fa fa-exchange"></i>
                                <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                                <i className="fa fa-eye"></i>
                                <span className="tooltipp">quick view</span>
                            </button>
                        </div>
                    </div>
                </NavLink>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn">
                        <i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
