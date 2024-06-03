import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const boxBudgetsContent = [
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'New',
    1, 'João Ratão', '13/06/2024', '20000', 'Rejected',
    1, 'João Ratão', '13/06/2024', '20000', 'Waiting',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Waiting',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Waiting',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Waiting',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Rejected',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Waiting',
    1, 'João Ratão', '13/06/2024', '20000', 'Paid',
    1, 'João Ratão', '13/06/2024', '20000', 'Rejected',
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
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="text-end pt-3">Budget Nº
                                <input className="form-control w-75 ms-auto text-end" id="budgetnfilter" type="number" placeholder="Search.."></input>
                            </th>
                            <th>Client
                                <input className="form-control w-75" id="clientfilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th>Date
                                <input className="form-control w-75" id="datefilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th>Amount</th>
                            <th className='w-10'>Status
                                <input className="form-control w-75" id="statusfilter" type="text" placeholder="Search.."></input>
                            </th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === rows.length - 1 ? '0 0 15px 15px' : '0' }}>
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
                                <td className='text-center'>
                                    <button className='btn btn-outline-warning'>See more</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav aria-label="..." className='ms-3'>
                    <ul className="pagination">
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item active">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AdminBudgetList;
