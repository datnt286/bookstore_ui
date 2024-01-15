import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, onPageChange }) {
    return (
        <ReactPaginate
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName="pagination"
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            activeClassName="page-active"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            previousLabel="Trang trước"
            nextLabel="Trang sau"
        />
    );
}

export default Pagination;
