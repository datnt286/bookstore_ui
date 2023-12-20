import Detail from './Detail';
import Tab from './Tab';

function ProductDetail({ data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Detail data={data} />
                    <Tab data={data}/>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
