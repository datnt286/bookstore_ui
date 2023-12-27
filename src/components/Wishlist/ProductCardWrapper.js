import ProductCard from '../ProductCard';

function ProductCardWrapper({ data }) {
    return (
        <div className="product-card-wrapper d-inline">
            <ProductCard data={data} />
        </div>
    );
}

export default ProductCardWrapper;
