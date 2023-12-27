import { Link } from 'react-router-dom';

function Category({ data }) {
    return (
        <div className="col-md-4 col-xs-6">
            <Link to={`/danh-muc/${data.slug}`}>
                <div className="shop">
                    <div className="shop-img d-flex justify-content-center align-items-center">
                        <img src={data.absolute_path} alt="" />
                    </div>

                    <div className="shop-body">
                        <h3>{data.name}</h3>
                        <span className="cta-btn">
                            Xem ngay <i className="fa fa-arrow-circle-right"></i>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Category;
