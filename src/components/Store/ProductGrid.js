import ProductCard from '../ProductCard';
import Sort from './Sort';

function ProductGrid({ data }) {
    const products = data.map((product, index) => {
        return <ProductCard key={index} data={product} />;
    });

    return (
        <div id="store" className="col-md-9">
            <div className="store-filter clearfix">
                <div className="store-sort">
                    <label>Sắp xếp theo:</label>
                    <select className="input-select form-control">
                        <option value="0">Bán chạy</option>
                        <option value="1">Mới nhất</option>
                    </select>
                </div>
            </div>
            <div className="row">{products}</div>
        </div>
    );
}

export default ProductGrid;
