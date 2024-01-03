import CartTable from './CartTable';
import CartTotal from './CartTotal';

function Cart() {
    return (
        <div className="section">
            <div className="container">
                <CartTable />
                <CartTotal />
            </div>
        </div>
    );
}

export default Cart;
