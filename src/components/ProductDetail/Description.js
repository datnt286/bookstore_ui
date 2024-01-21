function Description({ data }) {
    return (
        <div id="description" className="tab-pane fade in active">
            <div className="row">
                <div className="col-md-12">
                    <p>{data.description || 'Hiện chưa có mô tả'}</p>
                </div>
            </div>
        </div>
    );
}

export default Description;
