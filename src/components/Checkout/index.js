import { useState } from 'react';
import BillingDetail from './BillingDetail';
import Order from './Order';

function Checkout() {
    const [validationErrors, setValidationErrors] = useState({});

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <BillingDetail validationErrors={validationErrors} />
                    <Order setValidationErrors={setValidationErrors} />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
