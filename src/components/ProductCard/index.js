import { NavLink } from 'react-router-dom';

function ProductCard({ data }) {
    let absolute_path;

    if (!data || !data.absolute_path) {
        if (!data || !data.images || data.images.length === 0) {
            return null;
        }

        ({ absolute_path } = data.images[0] || {});
    }

    return (
        <div className="col-md-3 col-xs-6">
            <NavLink to={`/${data.slug}`}>
                <div className="product">
                    <div className="product-img d-flex justify-content-center align-items-center">
                        <img src={data.absolute_path || absolute_path} alt="" className="product-image" />
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category">Sách tự lực</p>
                        <h3 className="product-name">{data.name}</h3>
                        <h4 className="product-price">
                            {data.price} <del className="product-old-price">$990.00</del>
                        </h4>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default ProductCard;
