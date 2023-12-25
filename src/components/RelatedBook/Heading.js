import { NavLink } from 'react-router-dom';

function Heading() {
    return (
        <div className="section-title d-flex justify-content-between">
            <h3 className="title">Sách liên quan</h3>
            <NavLink to="">
                <span className="text-danger">Xem thêm &gt; &gt;</span>
            </NavLink>
        </div>
    );
}

export default Heading;
