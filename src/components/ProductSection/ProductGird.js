import ProductCard from '../ProductCard';

function ProductGrid() {
    return (
        <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductGrid;
