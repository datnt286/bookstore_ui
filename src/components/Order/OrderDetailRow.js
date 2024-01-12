import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';

function OrderDetailRow({ data }) {
    const orderDetail = useSelector((state) => state.orderDetail);
    const [reviewVisible, setReviewVisible] = useState(false);

    const handleReviewClick = () => {
        setReviewVisible(true);
    };

    const hideReview = () => {
        setReviewVisible(false);
    };

    return (
        <React.Fragment key={data.id}>
            <tr>
                <td className="align-middle d-flex align-items-center">
                    <Link
                        to={`/${data.product_slug}`}
                        onClick={(event) => {
                            event.preventDefault();
                            window.location.href = `/${data.product_slug}`;
                        }}
                    >
                        <img className="order-detail-image" src={data.product_image} alt="Hình ảnh" />
                        <span className="order-detail">{data.product_name}</span>
                    </Link>
                </td>
                <td className="order-detail align-middle">{data.price.toLocaleString()} ₫</td>
                <td className="order-detail align-middle">{data.quantity}</td>
                <td className="order-detail align-middle">
                    {(parseInt(data.quantity) * parseInt(data.price)).toLocaleString()} ₫
                </td>
                {orderDetail.status === 4 && (
                    <td className="align-middle">
                        <button className="btn btn-sm btn-danger" onClick={handleReviewClick}>
                            Đánh giá
                        </button>
                    </td>
                )}
            </tr>
            <tr>
                <td colSpan="5">{reviewVisible && <ReviewForm orderDetailId={data.id} hideReview={hideReview} />}</td>
            </tr>
        </React.Fragment>
    );
}

export default OrderDetailRow;
