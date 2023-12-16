import DefaultLayout from '../layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';
import NewSletter from '../components/NewSletter';
import HotDealBanner from '../components/HotDealBanner';

function HomePage() {
    return (
        <DefaultLayout>
            <ProductSection title={'Sách mới'} />
            <HotDealBanner />
            <ProductSection title={'Sách bán chạy'} />
            <NewSletter />
        </DefaultLayout>
    );
}

export default HomePage;
