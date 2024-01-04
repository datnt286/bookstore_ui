import { useDispatch } from 'react-redux';
import { setOrderDetails } from '../../redux/orderDetailSlice';
import { setOrders, setOrdered, setConfirmed, setDelivering, setDelivered, setCanceled } from '../../redux/orderSlice';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function OrderRow({ data }) {
    const dispatch = useDispatch();

    const getStatusText = (status) => {
        switch (status) {
            case 1:
                return 'Đã đặt';
            case 2:
                return 'Đã xác nhận';
            case 3:
                return 'Đang giao';
            case 4:
                return 'Đã giao';
            case 5:
                return 'Đã huỷ';
            default:
                return 'Trạng thái không xác định';
        }
    };

    const handleDetailClick = async (id) => {
        try {
            const res = await axiosInstance.get(`/order/details/${id}`);
            dispatch(setOrderDetails(res.data.data));
        } catch (error) {
            console.error('Lỗi: ', error);
        }
    };

    const handleConfirm = (id) => {
        async function fetchData() {
            try {
                const confirmRes = await axiosInstance.get(`order/confirm/${id}`);
                const ordersRes = await axiosInstance.get('/order');

                dispatch(setOrders(ordersRes.data.data.orders));
                dispatch(setOrdered(ordersRes.data.data.ordered));
                dispatch(setConfirmed(ordersRes.data.data.confirmed));
                dispatch(setDelivering(ordersRes.data.data.delivering));
                dispatch(setDelivered(ordersRes.data.data.delivered));
                dispatch(setCanceled(ordersRes.data.data.canceled));

                Swal.fire({
                    icon: 'success',
                    title: confirmRes.data.message,
                    timer: 2000,
                });
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
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
                    const cancelRes = await axiosInstance.get(`order/cancel/${id}`);
                    const ordersRes = await axiosInstance.get('/order');

                    dispatch(setOrders(ordersRes.data.data.orders));
                    dispatch(setOrdered(ordersRes.data.data.ordered));
                    dispatch(setConfirmed(ordersRes.data.data.confirmed));
                    dispatch(setDelivering(ordersRes.data.data.delivering));
                    dispatch(setDelivered(ordersRes.data.data.delivered));
                    dispatch(setCanceled(ordersRes.data.data.canceled));

                    Swal.fire({
                        icon: 'success',
                        title: cancelRes.data.message,
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
            <td className="align-middle">{data.total} đ</td>
            <td className="align-middle">{getStatusText(data.status)}</td>
            <td className="align-middle">
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => handleDetailClick(data.id)}
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
