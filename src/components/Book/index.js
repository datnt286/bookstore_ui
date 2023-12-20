import BookGrid from './BookGrid';

function Book({ data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="section-title d-flex justify-content-between">
                    <h3 className="title">Thể loại</h3>
                </div>
                <BookGrid data={data} />
            </div>
        </div>
    );
}

export default Book;
