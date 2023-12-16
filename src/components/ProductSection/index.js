import ProductGrid from './ProductGird';
import Heading from './Heading';

function ProductSection({ title }) {
    return (
        <div className="section">
            <div className="container">
                <Heading title={title} />
                <ProductGrid />
            </div>
        </div>
    );
}

export default ProductSection;
