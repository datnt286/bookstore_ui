import { Link } from 'react-router-dom';

function Heading() {
    return (
        <div className="section-title d-flex justify-content-between">
            <h3 className="title">Sách liên quan</h3>
            <Link to="/">
                <span className="text-danger">Xem thêm &gt; &gt;</span>
            </Link>
        </div>
    );
}

export default Heading;
