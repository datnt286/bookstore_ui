function CartDetail() {
    return (
        <tr>
            <td>
                <img src="./dac-nhan-tam.jpg" alt="" className="product-cart-image" />
                <span className="cart-detail mx-2">Đắc nhân tâm</span>
            </td>
            <td className="cart-detail align-middle">$55.00</td>
            <td className="align-middle">
                <button className="btn-quantity">-</button>
                <input type="text" value="1" className="cart-detail quantity-input align-middle text-center" />
                <button className="btn-quantity">+</button>
            </td>
            <td className="cart-detail align-middle">
                <span>$110.00</span>
            </td>
            <td>
                <span></span>
            </td>
        </tr>
    );
}

export default CartDetail;
