import DefaultLayout from '../layouts/DefaultLayout';
import CategorySection from '../components/CategorySection';
import NewSletter from '../components/NewSletter';

function CategoryPage() {
    return (
        <DefaultLayout>
            <CategorySection />
            <NewSletter />
        </DefaultLayout>
    );
}

export default CategoryPage;
