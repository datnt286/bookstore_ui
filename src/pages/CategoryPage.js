import DefaultLayout from '../layouts/DefaultLayout';
import Category from '../components/CategorySection';
import NewSletter from '../components/NewSletter';

function CategoryPage() {
    return (
        <DefaultLayout>
            <Category />
            <NewSletter />
        </DefaultLayout>
    );
}

export default CategoryPage;
