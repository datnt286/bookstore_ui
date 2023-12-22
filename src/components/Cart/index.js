import { useEffect, useState } from 'react';
import CartGrid from './CartGrid';
import CartButton from './CartButton';
import CartTotal from './CartTotal';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        var products = localStorage.getItem('cart');

        if (products != null) {
            setCart(JSON.parse(products));
        }
    }, []);

    return (
        <div className="section">
            <div className="container">
                <CartGrid cart={cart} />
                <CartButton />
                <CartTotal />
            </div>
        </div>
    );
}

export default Cart;
