import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';

function OrderRow({ data }) {
    const getStatusText = (status) => {
        switch (status) {
            case 1:
                return 'Đã đặt';
            case 2:
                return 'Đã xác nhận';
            case 3:
                return 'Đã vận chuyển';
            case 4:
                return 'Đã giao';
            case 5:
                return 'Đã huỷ';
            default:
                return 'Trạng thái không xác định';
        }
    };

    const handleConfirm = (id) => {
        async function fetchData() {
            try {
                const res = await axiosInstance(`order/confirm/${id}`);

                Swal.fire({
                    icon: 'success',
                    title: res.data.message,
                    timer: 2000,
                });
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    };

    const handleCancel = (id) => {
        async function fetchData() {
            try {
                const res = await axiosInstance(`order/cancel/${id}`);

                Swal.fire({
                    icon: 'success',
                    title: res.data.message,
                    timer: 2000,
                });
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    };

    return (
        <tr>
            <td className="align-middle">{data.order_date}</td>
            <td className="align-middle">{data.total} đ</td>
            <td className="align-middle">{getStatusText(data.status)}</td>
            <td className="align-middle">
                <button className="btn btn-primary" data-toggle="modal" data-target="#orderDetail">
                    Chi tiết
                </button>
            </td>
            {data.status === 3 && (
                <td className="align-middle">
                    <button className="btn btn-success" onClick={() => handleConfirm(data.id)}>
                        Xác nhận
                    </button>
                </td>
            )}
            {!(data.status === 4 || data.status === 5) && (
                <td className="align-middle">
                    <button className="btn btn-danger" onClick={() => handleCancel(data.id)}>
                        Huỷ
                    </button>
                </td>
            )}
        </tr>
    );
}

export default OrderRow;
