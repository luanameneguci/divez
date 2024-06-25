function BoxProgress({ title, data }) {
    const result = createDataArrays(data);
    const resultado = calculatePercentages(result);

    return (
        <div className="box-container bg-white col-auto roundbg d-flex shadow" style={{ height: 360 + "px" }}>
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



function createDataArrays(data) {
    let result = [];
    for (let i = 0; i < data.length && result.length < 4; i++) {
        let subArray = [data[i].nome, data[i].numeroTotal, data[i].numeroAtivos];
        result.push(subArray);
    }
    return result;
}

function calculatePercentages(result) {
    let resultado = [];
    for (let i = 0; i < result.length; i++) {
        let item = result[i];
        let percentage = (item[2] / item[1]) * 100;
        let newItem = {
            ...item,
            percentage: percentage.toFixed(0),
        };
        resultado.push(newItem);
    }
    return resultado;
}

const ProgressDiv = ({ nome, numeroAtivos, numeroTotal, percentage }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <p>
          <strong>{nome}</strong>
        </p>
        <div className="d-flex">
          <p>
            {numeroAtivos} of {numeroTotal}
          </p>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
  
  const ProgressDivs = ({ resultado }) => {
    const limitedData = resultado.slice(0, 4);
    return (
      <div>
        {limitedData.map((item, index) => (
          <ProgressDiv
            key={index}
            nome={item[0]}
            numeroAtivos={item[2]}
            numeroTotal={item[1]}
            percentage={item.percentage}
          />
        ))}
      </div>
    );
  };

export default BoxProgress;