import { useSelector } from 'react-redux';
import CartDetail from './CartDetail';

function CartTable() {
    const cart = useSelector((state) => state.cart.items);

    return (
        <>
            {cart.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th className="fs-2" scope="col">
                                Sản phẩm
                            </th>
                            <th className="fs-2" scope="col">
                                Giá bán
                            </th>
                            <th className="fs-2" scope="col">
                                Số lượng
                            </th>
                            <th className="fs-2" scope="col">
                                Thành tiền
                            </th>
                            <th className="fs-2" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => {
                            return <CartDetail key={index} product={product} />;
                        })}
                    </tbody>
                </table>
            ) : (
                <h3>Không có sản phẩm trong giỏ hàng</h3>
            )}
        </>
    );
}

export default CartTable;
