import DefaultLayout from '../layouts/DefaultLayout';
import NewSletter from '../components/NewSletter';
import Store from '../components/StoreSection';

function StorePage() {
    return (
        <DefaultLayout>
            <Store />
            <NewSletter />
        </DefaultLayout>
    );
}

export default StorePage;
