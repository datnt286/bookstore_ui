function Heading({ title }) {
    return (
        <div className="section-title text-left">
            <h3 className="title">{title}</h3>
            <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                    <li className="active">
                        <a data-toggle="tab" href="#tab1">
                            Laptops
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#tab1">
                            Smartphones
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#tab1">
                            Cameras
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#tab1">
                            Accessories
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Heading;
