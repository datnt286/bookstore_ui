import { useState, useEffect } from 'react';

function CartDetail({ product }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [amount, setAmount] = useState(parseInt(product.price) * parseInt(product.quantity));

    useEffect(() => {
        setAmount(parseInt(product.price) * parseInt(quantity));
    }, [product.price, quantity]);

    const handleQuantityChange = (value) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + value));
    };

    const handleDelete = (slug) => {
        // Xử lý xoá sản phẩm
    };

    return (
        <tr>
            <td>
                <img src={product.image} alt="" className="product-cart-image" />
                <span className="cart-detail mx-2">{product.name}</span>
            </td>
            <td className="cart-detail align-middle">{product.price}</td>
            <td className="align-middle">
                <button onClick={() => handleQuantityChange(-1)} className="btn-quantity">
                    -
                </button>
                <input type="text" value={quantity} className="cart-detail quantity-input align-middle text-center" />
                <button onClick={() => handleQuantityChange(1)} className="btn-quantity">
                    +
                </button>
            </td>
            <td className="cart-detail align-middle">
                <span>{amount}</span>
            </td>
            <td className="cart-detail align-middle">
                <button onClick={() => handleDelete(product.slug)} className="btn-delete">
                    Xoá
                </button>
            </td>
        </tr>
    );
}

export default CartDetail;
