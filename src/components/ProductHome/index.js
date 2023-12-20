import ProductGrid from './ProductGird';
import Heading from './Heading';

function ProductHome({ title, data }) {
    return (
        <div className="section">
            <div className="container">
                <Heading title={title} />
                <ProductGrid data={data} />
            </div>
        </div>
    );
}

export default ProductHome;
