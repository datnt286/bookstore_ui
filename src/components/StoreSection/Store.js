import ProductCard from '../ProductCard';
import Filter from './Filter';
import Pagination from './Pagination';

function Store({ data }) {
    const products = data.map((product) => {
        return <ProductCard key={product.slug} data={product} />;
    });

    return (
        <div id="store" className="col-md-9">
            <Filter />
            <div className="row">{products}</div>
            <Pagination />
        </div>
    );
}

export default Store;
