import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

import OrderTable from './OrderTable';
import OrderDetail from './OrderDetail';

function Order() {
    const [orders, setOrders] = useState([]);
    const [ordered, setOrdered] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [delivering, setDelivering] = useState([]);
    const [delivered, setDelivered] = useState([]);
    const [canceled, setCanceled] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosInstance.get('/order');
                setOrders(res.data.data.orders);
                setOrdered(res.data.data.ordered);
                setConfirmed(res.data.data.confirmed);
                setDelivering(res.data.data.delivering);
                setDelivered(res.data.data.delivered);
                setCanceled(res.data.data.canceled);
            } catch (error) {
                console.error('Lỗi: ', error);
            }
        }

        fetchData();
    }, []);

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
                            <OrderTable tab="all" data={orders} />
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
