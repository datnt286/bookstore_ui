import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Review from './Review';

function OrderDetail() {
    const orderDetail = useSelector((state) => state.orderDetail);
    const [reviewVisible, setReviewVisible] = useState(false);

    const totalAmount = orderDetail.items.reduce((total, detail) => {
        return total + parseInt(detail.quantity) * parseInt(detail.price);
    }, 0);

    const handleReviewClick = () => {
        setReviewVisible(true);
    };

    const hideReview = () => {
        setReviewVisible(false);
    };

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
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetail.items.map((detail) => (
                                    <React.Fragment key={detail.id}>
                                        <tr>
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
                                            {orderDetail.status === 4 && (
                                                <td className="align-middle">
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={handleReviewClick}
                                                    >
                                                        Đánh giá
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                        <tr>
                                            <td colSpan="5">
                                                {reviewVisible && (
                                                    <Review orderDetailId={detail.id} hideReview={hideReview} />
                                                )}
                                            </td>
                                        </tr>
                                    </React.Fragment>
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
