import ProductDetail from './ProductDetail';
import ProductTab from './ProductTab';

function ProductDetailSection({ data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <ProductDetail data={data} />
                    <ProductTab />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailSection;
