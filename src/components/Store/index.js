import Aside from './Aside';
import ProductGrid from './ProductGrid';

function StoreSection({ data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Aside />
                    <ProductGrid data={data} />
                </div>
            </div>
        </div>
    );
}

export default StoreSection;
