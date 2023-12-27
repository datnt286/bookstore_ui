import ProductCard from './ProductCard';

function ProductGrid({ data }) {
    const products = data.map((product, index) => {
        return <ProductCard key={index} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
