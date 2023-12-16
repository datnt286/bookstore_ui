import Aside from './Aside';
import Store from './Store';

function StoreSection() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Aside />
                    <Store />
                </div>
            </div>
        </div>
    );
}

export default StoreSection;
