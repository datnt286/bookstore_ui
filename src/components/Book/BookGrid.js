import ProductCard from '../ProductCard';

function BookGird({ data }) {
    const books = data.map((book, index) => {
        return <ProductCard key={index} data={book} />;
    });

    return <div className="row">{books}</div>;
}

export default BookGird;
