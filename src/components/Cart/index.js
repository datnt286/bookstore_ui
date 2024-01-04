import { useSelector } from 'react-redux';
import CartTable from './CartTable';
import CartTotal from './CartTotal';

function Cart() {
    const cart = useSelector((state) => state.cart.items);

    return (
        <div className="section">
            <div className="container">
                <CartTable />
                {cart.length > 0 && <CartTotal />}
            </div>
        </div>
    );
}

export default Cart;
