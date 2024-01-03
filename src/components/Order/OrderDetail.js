import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

function OrderDetail({ orderId }) {
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const res = await axiosInstance.get(`/order/details/${orderId}`);
                setOrderDetails(res.data.data);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        };
        fetchOrderDetails();
    }, [orderId]);

    return (
        <div className="modal fade" id="orderDetail" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">
                            Chi tiết hoá đơn
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="fs-2" scope="col">
                                        Tên sản phẩm
                                    </th>
                                    <th className="fs-2" scope="col">
                                        Số lượng
                                    </th>
                                    <th className="fs-2" scope="col">
                                        Giá bán
                                    </th>
                                    <th className="fs-2" scope="col">
                                        Thành tiền
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.map((detail) => (
                                    <tr key={detail.id}>
                                        <td>{detail.product_name}</td>
                                        <td>{detail.quantity}</td>
                                        <td>{detail.price} đ</td>
                                        <td>{parseInt(detail.quantity) * parseInt(detail.price)} đ</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
