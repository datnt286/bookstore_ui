import BillingDetail from './BillingDetail';
import Order from './Order';

function Checkout() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <BillingDetail />
                    <Order />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
