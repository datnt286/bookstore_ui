import ProductCard from '../ProductCard';

function BookGrid({ data }) {
    const books = data.map((book, index) => {
        return <ProductCard key={index} data={book} />;
    });

    return <div className="row">{books}</div>;
}

export default BookGrid;
