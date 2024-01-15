import Description from './Description';
import Reviews from './Reviews';
import Comments from './Comments';

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
                            Đánh giá ({data.total_reviews || 0})
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#comments">
                            Bình luận ({data.total_comments || 0})
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <Description data={data} />
                    <Reviews data={data} />
                    <Comments data={data} />
                </div>
            </div>
        </div>
    );
}

export default ProductTab;
