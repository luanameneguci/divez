import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const boxBudgetsContent = [
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    /*1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',*/
];

// Split the boxBudgetsContent array into rows of 5 items each
const rows = [];
const itemsPerRow = 5;

for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow) {
    rows.push(boxBudgetsContent.slice(i, i + itemsPerRow));
}

const AdminBudgetList = () => {
    return (
        <div className="dashboard-content bg-dark w-100">
            <h4 className="title my-2">Budgets</h4>
            <div className="container text-center">
                <div className="row my-4">
                    <div className="col-12">
                        <BudgetsListBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BudgetsListBox() {
    return (
        <div className="box-container d-flex h-100">
            <div className="container">
                <table className='table text-start'>
                    <thead className='text-white rounded-top'>
                        <tr>
                            <th className=" text-end">Budget Nº
                                <input className="form-control w-75 ms-auto" id="budgetnfilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th >Client
                                <input className="form-control w-75" id="clientfilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th >Date
                                <input className="form-control w-75" id="datefilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th >Amount</th>
                            <th >Status
                                <input className="form-control w-75" id="statusfilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white text-start '>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 4) {
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                    }
                                    return (
                                        <td key={colIndex} className={colIndex === 0 ? 'text-end' : 'ps-4'} style={{ color: colIndex === 4 ? color : 'inherit' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                                <td>
                                    <button className='btn btn-outline-warning'>See more</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminBudgetList;
