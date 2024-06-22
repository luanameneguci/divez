function BoxProgress({ title, resultado }) {
    return (
        <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
            <div className="col-12">
                <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
                    <strong>
                        <h4>{title}</h4>
                    </strong>
                </span>
                <div className="px-3">
                    <ProgressDivs resultado={resultado} />
                </div>
            </div>
        </div>
    );
}

function ProgressDivs({ resultado }) {
    return (
        <div>
            {resultado.map((item, index) => (
                <div key={index}>
                    <div className="d-flex justify-content-between pt-1">
                        <span>{item[0]}</span>
                        <span>{item.percentage}%</span>
                    </div>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-info progress-bar-animated rounded"
                            role="progressbar"
                            style={{ width: item.percentage + "%" }}
                            aria-valuenow={item.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BoxProgress;