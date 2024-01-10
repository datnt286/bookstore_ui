import ProductCard from '../ProductCard';
import Sort from './Sort';

function ProductGrid({ data }) {
    const products = data.map((product, index) => {
        return <ProductCard key={index} data={product} />;
    });

    return (
        <div id="store" className="col-md-9">
            <Sort />
            <div className="row">{products}</div>
        </div>
    );
}

export default ProductGrid;
