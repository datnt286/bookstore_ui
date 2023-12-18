import ProductGrid from './ProductGird';
import Heading from './Heading';

function ProductSection({ title, data }) {
    return (
        <div className="section">
            <div className="container">
                <Heading title={title} />
                <ProductGrid data={data} />
            </div>
        </div>
    );
}

export default ProductSection;
