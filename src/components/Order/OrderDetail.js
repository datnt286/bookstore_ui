function OrderDetail() {
    return (
        <div className="modal fade" id="orderDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
                        <p>Modal content goes here...</p>
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
