import { useState } from 'react';
import axiosInstance from '../../services/axiosInstance';
import Swal from 'sweetalert2';
import OrderDetail from './OrderDetail';

function OrderRow({ data }) {
    const [showOrderDetail, setShowOrderDetail] = useState(false);

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

    const handleDetails = () => {
        setShowOrderDetail(true);
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
        Swal.fire({
            title: 'Bạn có chắc muốn huỷ?',
            text: 'Bạn sẽ không thể khôi phục hoá đơn đã huỷ!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vâng, tôi muốn huỷ!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosInstance(`order/cancel/${id}`);

                    Swal.fire({
                        icon: 'success',
                        title: res.data.message,
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
                    onClick={handleDetails}
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

                {showOrderDetail && <OrderDetail orderId={data.id} />}
            </td>
        </tr>
    );
}

export default OrderRow;
