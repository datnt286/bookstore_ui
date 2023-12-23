import BillingDetail from './BillingDetail';
import Order from './Order';

function Checkout() {
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <BillingDetail user={user} />
                    <Order />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
