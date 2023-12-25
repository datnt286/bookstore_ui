import { NavLink } from 'react-router-dom';

function Heading({ title }) {
    return (
        <div className="section-title d-flex justify-content-between">
            <h3 className="title">{title}</h3>
            <NavLink to="/">
                <span className="text-danger">Xem thêm &gt; &gt;</span>
            </NavLink>
        </div>
    );
}

export default Heading;
