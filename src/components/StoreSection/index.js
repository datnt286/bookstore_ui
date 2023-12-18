import Aside from './Aside';
import Store from './Store';

function StoreSection({ data }) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <Aside />
                    <Store data={data} />
                </div>
            </div>
        </div>
    );
}

export default StoreSection;
