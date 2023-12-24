import ProductCard from '../ProductCard';

function ProductGrid({ data }) {
    const products = data.slice(0, 4).map((product, index) => {
        return <ProductCard key={index} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
