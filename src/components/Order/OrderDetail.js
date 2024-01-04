import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function OrderDetail() {
    const orderDetails = useSelector((state) => state.orderDetail);

    const totalAmount = orderDetails.reduce((total, detail) => {
        return total + parseInt(detail.quantity) * parseInt(detail.price);
    }, 0);

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
                                        Sản phẩm
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
                                        <td className="align-middle d-flex align-items-center">
                                            <Link
                                                to={`/${detail.product_slug}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = `/${detail.product_slug}`;
                                                }}
                                            >
                                                <img
                                                    className="order-detail-image"
                                                    src={detail.product_image}
                                                    alt={detail.name || 'Hình ảnh'}
                                                />
                                                <span className="order-detail">{detail.product_name}</span>
                                            </Link>
                                        </td>
                                        <td className="order-detail align-middle">{detail.quantity}</td>
                                        <td className="order-detail align-middle">{detail.price} đ</td>
                                        <td className="order-detail align-middle">
                                            {parseInt(detail.quantity) * parseInt(detail.price)} đ
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3" className="order-detail text-right">
                                        Tổng thành tiền:
                                    </td>
                                    <td className="order-detail fw-bold text-danger">{totalAmount} đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
