import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../services/axiosInstance';
import OrderTable from './OrderTable';
import OrderDetail from './OrderDetail';

function Order() {
    const user = useSelector((state) => state.auth.user);
    const [orderStatusChanged, setOrderStatusChanged] = useState(false);
    const [orders, setOrders] = useState({
        orders: [],
        ordered: [],
        confirmed: [],
        delivering: [],
        delivered: [],
        canceled: [],
    });

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await axiosInstance.get(`/order?customer_id=${user.id}`);

                setOrders({
                    orders: res.data.orders,
                    ordered: res.data.ordered,
                    confirmed: res.data.confirmed,
                    delivering: res.data.delivering,
                    delivered: res.data.delivered,
                    canceled: res.data.canceled,
                });
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        if (orderStatusChanged) {
            fetchOrders();
            setOrderStatusChanged(false);
        }

        fetchOrders();
    }, [user.id, orderStatusChanged]);

    return (
        <div id="me" className="section">
            <div className="container">
                <div className="card card-primary card-outline">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a href="#orders" className="nav-link" data-toggle="tab">
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
                            <OrderTable
                                tab="orders"
                                data={orders.orders}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                            <OrderTable
                                tab="ordered"
                                data={orders.ordered}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                            <OrderTable
                                tab="confirmed"
                                data={orders.confirmed}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                            <OrderTable
                                tab="delivering"
                                data={orders.delivering}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                            <OrderTable
                                tab="delivered"
                                data={orders.delivered}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                            <OrderTable
                                tab="canceled"
                                data={orders.canceled}
                                setOrders={setOrders}
                                onOrderStatusChanged={() => setOrderStatusChanged(true)}
                            />
                        </div>
                    </div>
                </div>

                <OrderDetail />
            </div>
        </div>
    );
}

export default Order;
