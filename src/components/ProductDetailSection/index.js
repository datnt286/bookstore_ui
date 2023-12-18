import ProductDetail from './ProductDetail';
import ProductTab from './ProductTab';

function ProductDetailSection() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <ProductDetail />
                    <ProductTab />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailSection;
