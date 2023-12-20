import Category from './Category';

function CategorySection({ data }) {
    const categories = data.map((category, index) => {
        return <Category key={index} data={category} />;
    });

    return (
        <div className="section">
            <div className="container">
                <div className="row">{categories}</div>
            </div>
        </div>
    );
}

export default CategorySection;
