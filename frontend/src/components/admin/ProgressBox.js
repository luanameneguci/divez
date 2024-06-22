import React from 'react';
import '../../App.css';



// Componente que mostra a Lista de Tickets
let data = [
    { nome: "Programming", numeroTotal: 1000, numeroAtivos: 750 },
    { nome: "Finance", numeroTotal: 900, numeroAtivos: 500 },
    { nome: "Design", numeroTotal: 900, numeroAtivos: 900 },
    { nome: "Support", numeroTotal: 800, numeroAtivos: 500 },
];

const result = createDataArrays(data);
const resultado = calculatePercentages(result);

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

function ProgressDivs({ resultado }) {
    return (
        <div>
            {resultado.map((item, index) => (
                <div key={index} className='py-3'>
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

function ProgressBox() {
    return (
        <div className="box-container bg-white col-auto roundbg d-flex shadow pb-3 shadow">
            <div className="col-12">
                <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
                    <strong>
                        <h4>Pending Tickets</h4>
                    </strong>
                </span>
                <div className="px-3">
                    <ProgressDivs resultado={resultado} />
                </div>
            </div>
        </div>
    );
}

export default ProgressBox;
