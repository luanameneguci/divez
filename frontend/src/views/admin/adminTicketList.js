import React from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";

const boxBudgetsContent = [
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '2', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '2', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '1', 'New',
    1, 'João Ratão', '13/06/2024', '20000', '2', 'New',
];

// Split the boxBudgetsContent array into rows of 5 items each
const rows = [];
const itemsPerRow = 6;

for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow) {
    rows.push(boxBudgetsContent.slice(i, i + itemsPerRow));
}

const AdminTicketList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Product Name</h4>
            <div className="container text-center">
                <div className="row d-flex justify-content-between">
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Total Tickets" number="20" image={notificationicon} />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="Tickets Solved" number="20" image={notificationicon} />
                    </div>
                    <div className="col mx-1 bg-white roundbg">
                        <Box title="To Solve" number="20" image={notificationicon} />
                    </div>
                </div>
                <div className="row my-4 rounded">
                    <TicketListBox />
                </div>
            </div>
        </div>
    );
}


function TicketListBox() {
    return (
        <div className="box-container d-flex h-100">
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="text-end pt-3">Ticket Nº
                                <input className="form-control w-75 ms-auto text-end" id="ticketfilter" type="number"></input>
                            </th>
                            <th>Title
                                <input className="form-control w-75" id="titlefilter" type="text" placeholder="Search"></input>
                            </th>
                            <th>Date
                                <input className="form-control w-75" id="datefilter" type="text" placeholder="Search"></input>
                            </th>
                            <th>Department
                                <input className="form-control w-75" id="depfilter" type="text" placeholder="Search"></input>
                            </th>
                            <th className='w-10'>Priority
                                <input className="form-control w-75" id="priofilter" type="number" ></input>
                            </th>
                            <th className='w-10'>Status
                                <input className="form-control w-75" id="statusfilter" type="text" placeholder="Search"></input>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === rows.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                        return (
                                            <td key={colIndex} className={colIndex === 0 ? 'text-end' : 'ps-4'} style={{ color: colIndex === 5 ? color : 'inherit' }}>
                                            {data} <a href="#" className='text-black'>...</a>
                                        </td>
                                        )
                                    }
                                    return (
                                        <td key={colIndex} className={colIndex === 0 ? 'text-end' : 'ps-3'} style={{ color: colIndex === 5 ? color : 'inherit' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav aria-label="..." className='ms-3'>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

function Box(props) {
    return (
        <div className="box-container bg-white col-auto rounded d-flex px-4 py-4 shadow">
            <div className="col-10">
                <span className="box-title d-flex justify-content-start">
                    <strong>
                        <h6>{props.title}</h6>
                    </strong>
                </span>
                <span className="box-number d-flex justify-content-start pt-2">
                    <strong>
                        <h2>{props.number}</h2>
                    </strong>
                </span>
            </div>
            <div>
                <img src={props.image} alt="" className="box-image ms-3" />
            </div>
        </div>
    );
}


export default AdminTicketList;
