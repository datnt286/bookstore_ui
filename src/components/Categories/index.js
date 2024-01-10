import Category from './Category';

function Categories({ data }) {
    const categories = data.map((category) => {
        return <Category key={category.id} data={category} />;
    });

    return (
        <div className="section">
            <div className="container">
                <div className="row">{categories}</div>
            </div>
        </div>
    );
}

export default Categories;
