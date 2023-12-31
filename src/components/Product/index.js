import ProductGrid from './ProductGrid';

function Product({ title, data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="section-title d-flex justify-content-between">
                    <h3 className="title">{title}</h3>
                </div>
                <ProductGrid data={data} />
            </div>
        </div>
    );
}

export default Product;
