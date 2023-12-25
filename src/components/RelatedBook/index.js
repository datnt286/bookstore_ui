import Heading from './Heading';
import ProductGrid from './ProductGrid';

function RelatedBook({ data, slug }) {
    return (
        <div className="section">
            <div className="container">
                <Heading />
                <ProductGrid data={data} slug={slug} />
            </div>
        </div>
    );
}

export default RelatedBook;
