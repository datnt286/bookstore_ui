import CartDetail from './CartDetail';

function CartGrid() {
    return (
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
                <CartDetail />
                <CartDetail />
                <CartDetail />
                <CartDetail />
            </tbody>
        </table>
    );
}

export default CartGrid;
