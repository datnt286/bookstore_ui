function Category({ data }) {
    return (
        <>
            <div className="col-md-4 col-xs-6">
                <div className="shop">
                    <div className="shop-img d-flex justify-content-center align-items-center">
                        <img src={data.absolute_path} alt="" />
                    </div>
                    <div className="shop-body">
                        <h3>{data.name}</h3>
                        <a href="#" className="cta-btn">
                            Xem ngay <i className="fa fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
