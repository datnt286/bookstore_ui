import ProductGrid from './ProductGrid';

function Products({ title, data }) {
    return (
        <div className="section products">
            <div className="container">
                <div className="section-title d-flex justify-content-between">
                    <h3 className="title">{title}</h3>
                </div>
                <ProductGrid data={data} />
            </div>
        </div>
    );
}

export default Products;
