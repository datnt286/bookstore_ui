import Aside from './Aside';
import ProductGrid from './ProductGrid';

function StoreSection({ products, categories, authors }) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Aside categories={categories} authors={authors}/>
                    <ProductGrid data={products} />
                </div>
            </div>
        </div>
    );
}

export default StoreSection;
