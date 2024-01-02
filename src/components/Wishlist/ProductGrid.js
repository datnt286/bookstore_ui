import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductGrid() {
    const wishlist = useSelector((state) => state.wishlist);

    const products = wishlist.map((product, index) => {
        return <ProductCard key={index} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
