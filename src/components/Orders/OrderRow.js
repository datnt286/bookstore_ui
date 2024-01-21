import { useDispatch, useSelector } from 'react-redux';
import { setOrderDetails } from '../../redux/orderDetailSlice';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function OrderRow({ data, setOrders, onOrderStatusChanged }) {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const getStatusText = (status) => {
        switch (status) {
            case 1:
                return <span className="badge text-bg-info">Đã đặt</span>;
            case 2:
                return <span className="badge text-bg-primary">Đã xác nhận</span>;
            case 3:
                return <span className="badge text-bg-warning">Đang giao</span>;
            case 4:
                return <span className="badge text-bg-success">Đã giao</span>;
            case 5:
                return <span className="badge text-bg-danger">Đã huỷ</span>;
            default:
                return <span className="badge text-bg-default">Trạng thái không xác định</span>;
        }
    };

    const handleDetailClick = async (id, status) => {
        try {
            const res = await axiosInstance.get(`/order/details/${id}`);
            dispatch(setOrderDetails({ items: res.data, status }));
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    const handleConfirm = (id) => {
        async function fetchOrders() {
            try {
                const confirmRes = await axiosInstance.get(`/order/confirm/${id}`);
                const ordersRes = await axiosInstance.get(`/order?customer_id=${user.id}`);

                setOrders({
                    orders: ordersRes.data.orders,
                    ordered: ordersRes.data.ordered,
                    confirmed: ordersRes.data.confirmed,
                    delivering: ordersRes.data.delivering,
                    delivered: ordersRes.data.delivered,
                    canceled: ordersRes.data.canceled,
                });

                onOrderStatusChanged();

                Swal.fire({
                    icon: 'success',
                    title: confirmRes.message,
                    timer: 2000,
                });
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchOrders();
    };

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Bạn có chắc muốn huỷ?',
            text: 'Bạn sẽ không thể khôi phục hoá đơn đã huỷ!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Vâng, tôi muốn huỷ',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Huỷ',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const cancelRes = await axiosInstance.get(`/order/cancel/${id}`);
                    const ordersRes = await axiosInstance.get(`/order?customer_id=${user.id}`);

                    setOrders({
                        orders: ordersRes.data.orders,
                        ordered: ordersRes.data.ordered,
                        confirmed: ordersRes.data.confirmed,
                        delivering: ordersRes.data.delivering,
                        delivered: ordersRes.data.delivered,
                        canceled: ordersRes.data.canceled,
                    });

                    onOrderStatusChanged();

                    Swal.fire({
                        icon: 'success',
                        title: cancelRes.message,
                        timer: 2000,
                    });
                } catch (error) {
                    console.error('Error: ', error);
                }
            }
        });
    };

    return (
        <tr>
            <td className="align-middle">{data.order_date}</td>
            <td className="align-middle">{data.total_payment.toLocaleString() + ' ₫'}</td>
            <td className="align-middle">
                {data.payment_method === 1 ? 'Thanh toán khi nhận hàng' : 'Thanh toán Paypal'}
            </td>
            <td className="align-middle">{getStatusText(data.status)}</td>
            <td className="align-middle">
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => handleDetailClick(data.id, data.status)}
                    data-toggle="modal"
                    data-target="#orderDetail"
                >
                    Chi tiết
                </button>
                {data.status === 3 && (
                    <button className="btn btn-success mx-1" onClick={() => handleConfirm(data.id)}>
                        Xác nhận
                    </button>
                )}
                {(data.status === 1 || data.status === 2) && (
                    <button className="btn btn-danger mx-1" onClick={() => handleCancel(data.id)}>
                        Huỷ
                    </button>
                )}
            </td>
        </tr>
    );
}

export default OrderRow;
