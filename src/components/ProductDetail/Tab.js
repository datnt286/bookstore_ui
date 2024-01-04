import Description from './Description';
import Reviews from './Reviews';

function ProductTab({ data }) {
    return (
        <div className="col-md-12">
            <div id="product-tab">
                <ul className="tab-nav">
                    <li className="active">
                        <a data-toggle="tab" href="#description">
                            Mô tả
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#reviews">
                            Đánh giá (3)
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <Description data={data} />
                    <Reviews />
                </div>
            </div>
        </div>
    );
}

export default ProductTab;
