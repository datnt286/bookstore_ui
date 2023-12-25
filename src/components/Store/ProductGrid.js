import ProductCard from '../ProductCard';
import Filter from './Filter';
import Pagination from './Pagination';

function ProductGrid({ data }) {
    const products = data.map((product, index) => {
        console.log(index)
        return <ProductCard key={index} data={product} />;
    });

    return (
        <div id="store" className="col-md-9">
            <Filter />
            <div className="row">{products}</div>
            <Pagination />
        </div>
    );
}

export default ProductGrid;
