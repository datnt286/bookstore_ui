import ProductCard from '../ProductCard';
import Filter from './Filter';
import Pagination from './Pagination';

function Store() {
    return (
        <div id="store" className="col-md-9">
            <Filter />

            <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <Pagination />
        </div>
    );
}

export default Store;
