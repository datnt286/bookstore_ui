import DefaultLayout from '../layouts/DefaultLayout';
import NewSletter from '../components/NewSletter';
import StoreSection from '../components/StoreSection';

function StorePage() {
    return (
        <DefaultLayout>
            <StoreSection />
            <NewSletter />
        </DefaultLayout>
    );
}

export default StorePage;
