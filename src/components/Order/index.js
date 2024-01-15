import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCanceled, setConfirmed, setDelivered, setDelivering, setOrdered, setOrders } from '../../redux/orderSlice';
import axiosInstance from '../../services/axiosInstance';
import OrderTable from './OrderTable';
import OrderDetail from './OrderDetail';

function Order() {
    const user = useSelector((state) => state.auth.user);
    const orders = useSelector((state) => state.order.orders);
    const ordered = useSelector((state) => state.order.ordered);
    const confirmed = useSelector((state) => state.order.confirmed);
    const delivering = useSelector((state) => state.order.delivering);
    const delivered = useSelector((state) => state.order.delivered);
    const canceled = useSelector((state) => state.order.canceled);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get(`/order?customer_id=${user.id}`);
                dispatch(setOrders(res.data.orders));
                dispatch(setOrdered(res.data.ordered));
                dispatch(setConfirmed(res.data.confirmed));
                dispatch(setDelivering(res.data.delivering));
                dispatch(setDelivered(res.data.delivered));
                dispatch(setCanceled(res.data.canceled));
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, [dispatch]);

    return (
        <div id="me" className="section">
            <div className="container">
                <div className="card card-primary card-outline">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a href="#all" className="nav-link" data-toggle="tab">
                                    Tất cả
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#ordered" className="nav-link" data-toggle="tab">
                                    Đã đặt
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#confirmed" className="nav-link" data-toggle="tab">
                                    Đã xác nhận
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#delivering" className="nav-link" data-toggle="tab">
                                    Đang giao
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#delivered" className="nav-link" data-toggle="tab">
                                    Đã giao
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#canceled" className="nav-link" data-toggle="tab">
                                    Đã huỷ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="card-body align-middle">
                        <div className="tab-content">
                            <OrderTable tab="orders" data={orders} />
                            <OrderTable tab="ordered" data={ordered} />
                            <OrderTable tab="confirmed" data={confirmed} />
                            <OrderTable tab="delivering" data={delivering} />
                            <OrderTable tab="delivered" data={delivered} />
                            <OrderTable tab="canceled" data={canceled} />
                        </div>
                    </div>
                </div>

                <OrderDetail />
            </div>
        </div>
    );
}

export default Order;
