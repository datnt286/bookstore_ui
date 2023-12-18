import { NavLink } from 'react-router-dom';

function ProductCard() {
    return (
        <div className="col-md-3 col-xs-6">
            <NavLink to={`/slug`}>
                <div className="product">
                    <div className="product-img text-center">
                        <img src="./dac-nhan-tam.jpg" alt="" className="product-image" />
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category">Sách tự lực</p>
                        <h3 className="product-name">Đắc nhân tâm</h3>
                        <h4 className="product-price">
                            $980.00
                            <del className="product-old-price">$990.00</del>
                        </h4>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default ProductCard;
