import ProductGrid from './ProductGird';
import Heading from './Heading';

function ProductSection({ title, url, data }) {
    return (
        <div className="section">
            <div className="container">
                <Heading title={title} url={url} />
                <ProductGrid data={data} />
            </div>
        </div>
    );
}

export default ProductSection;
