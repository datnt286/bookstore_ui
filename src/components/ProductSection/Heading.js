import { Link } from 'react-router-dom';

function Heading({ title, url }) {
    return (
        <div className="section-title d-flex justify-content-between">
            <h3 className="title">{title}</h3>
            <Link to={url}>
                <span className="text-danger">Xem thêm &gt; &gt;</span>
            </Link>
        </div>
    );
}

export default Heading;
