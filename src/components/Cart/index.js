import CartGrid from './CartGrid';
import CartButton from './CartButton';
import CartTotal from './CartTotal';

function Cart() {
    return (
        <div className="section">
            <div className="container">
                <CartGrid />
                <CartButton />
                <CartTotal />
            </div>
        </div>
    );
}

export default Cart;
