import { Link } from 'react-router-dom';

function ProductCard({ data }) {
    return (
        <div className="col-md-3 col-xs-6">
            <Link to={`/san-pham/${data.slug}`}>
                <div className="product">
                    <div className="product-img d-flex justify-content-center align-items-center">
                        <img src={data.image_path} alt="Hình ảnh" className="product-image" />
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>

                    <div className="product-body">
                        <p className="product-category">{data.category_name}</p>
                        <h3 className="product-name">{data.name}</h3>
                        <h4 className="product-price">
                            {data.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}{' '}
                            <del className="product-old-price">990.00 ₫</del>
                        </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
