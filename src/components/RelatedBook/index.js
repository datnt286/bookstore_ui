import Heading from './Heading';
import ProductGrid from './ProductGrid';

function RelatedBook({ data, slug, url }) {
    return (
        <div className="section">
            <div className="container">
                <Heading url={url}/>
                <ProductGrid data={data} slug={slug} />
            </div>
        </div>
    );
}

export default RelatedBook;
