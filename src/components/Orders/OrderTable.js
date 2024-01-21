import OrderRow from './OrderRow';

function OrderTable({ tab, data, setOrders, onOrderStatusChanged }) {
    return (
        <div id={tab} className={`tab-pane ${tab === 'orders' ? 'active' : ''}`}>
            {data.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th className="fs-2" scope="col">
                                Ngày đặt
                            </th>
                            <th className="fs-2" scope="col">
                                Tổng thành tiền
                            </th>
                            <th className="fs-2" scope="col">
                                Hình thức thanh toán
                            </th>
                            <th className="fs-2" scope="col">
                                Trạng thái
                            </th>
                            <th className="fs-2" scope="col"></th>
                            <th className="fs-2" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order) => {
                            return (
                                <OrderRow
                                    key={order.id}
                                    tab={tab}
                                    data={order}
                                    setOrders={setOrders}
                                    onOrderStatusChanged={onOrderStatusChanged}
                                />
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h3 className="p-4">Danh sách trống!</h3>
            )}
        </div>
    );
}

export default OrderTable;
