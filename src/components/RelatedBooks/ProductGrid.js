import ProductCard from '../ProductCard';

function ProductGrid({ data, slug }) {
    const filteredProducts = data.filter((product) => product.slug !== slug);

    const products = filteredProducts.slice(0, 4).map((product) => {
        return <ProductCard key={product.id} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
