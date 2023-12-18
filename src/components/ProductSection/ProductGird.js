import ProductCard from '../ProductCard';

function ProductGrid({ data }) {
    const products = data.slice(0, 4).map((product) => {
        return <ProductCard key={product.id} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
