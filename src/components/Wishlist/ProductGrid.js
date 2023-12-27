import ProductCardWrapper from './ProductCardWrapper';

function ProductGrid({ data }) {
    const products = data.map((product, index) => {
        return <ProductCardWrapper key={index} data={product} />;
    });

    return <div className="row">{products}</div>;
}

export default ProductGrid;
