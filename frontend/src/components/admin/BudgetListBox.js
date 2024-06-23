import React, { useState } from 'react';
import notificationicon from "../../images/notification.png";
import Modal from 'react-bootstrap/Modal';
import '../../App.css';

const boxBudgetsContent = [
    [1, 'João Ratão', '13/06/2024', '20000', 'New'],
    [2, 'João Ratão', '13/06/2024', '20000', 'New'],
    [3, 'João Ratão', '13/06/2024', '20000', 'New'],
    [4, 'João Ratão', '13/06/2024', '20000', 'Rejected'],
    [5, 'João Ratão', '13/06/2024', '20000', 'Waiting'],
    [6, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [7, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [8, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [9, 'João Ratão', '13/06/2024', '20000', 'Waiting'],
    [10, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [11, 'João Ratão', '13/06/2024', '20000', 'Waiting'],
    [12, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [13, 'João Ratão', '13/06/2024', '20000', 'Waiting'],
    [14, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [15, 'João Ratão', '13/06/2024', '20000', 'Rejected'],
    [16, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [17, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [18, 'João Ratão', '13/06/2024', '20000', 'Waiting'],
    [19, 'João Ratão', '13/06/2024', '20000', 'Paid'],
    [20, 'João Ratão', '13/06/2024', '20000', 'Rejected'],
];

function BudgetsListBox({ numRowsToShow }) {
    const [lgShow, setLgShow] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState(null);

    const handleShow = (budget) => {
        setSelectedBudget(budget);
        setLgShow(true);
    };

    // State variables for filter inputs
    const [budgetNumberFilter, setBudgetNumberFilter] = useState('');
    const [clientFilter, setClientFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Filtering function
    const filteredRows = boxBudgetsContent.filter(row =>
        row[0].toString().includes(budgetNumberFilter) &&
        row[1].toLowerCase().includes(clientFilter.toLowerCase()) &&
        row[2].includes(dateFilter) &&
        row[4].toLowerCase().includes(statusFilter.toLowerCase())
    );

    // Function to get status color based on status value
    const getStatusColor = (status) => {
        switch (status) {
            case 'New':
                return '#FFD56D'; // yellow
            case 'Rejected':
                return '#EB5757'; // red
            case 'Paid':
                return '#00B69B'; // green
            case 'Waiting':
                return '#2D9CDB'; // blue
            default:
                return 'inherit'; // default color
        }
    };

    return (
        <div className="box-container d-flex h-100 shadow">
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start m-0'>
                    <thead className='text-white'>
                        <tr>
                            {/* Depending on numRowsToShow, show the table differently */}
                            {numRowsToShow === 5 ? (
                                <>
                                    <th>Budget</th>
                                    <th>Title</th>
                                    <th className='w-10'>Status</th>
                                    <th className='text-center'>Action</th>
                                </>
                            ) : numRowsToShow === 6 ? (
                                <>
                                    <th style={{ width: '10%' }}>Budget</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th className='w-10'>Status</th>
                                    <th className='text-center'>Action</th>
                                </>
                            ) : (
                                <>
                                    <th style={{ width: '10%' }} className="text-start pt-3">
                                        Budget
                                        <input
                                            className="form-control w-50 text-start"
                                            id="budgetnfilter"
                                            type="number"
                                            placeholder="Search.."
                                            value={budgetNumberFilter}
                                            onChange={(e) => setBudgetNumberFilter(e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        Client
                                        <input
                                            className="form-control w-75"
                                            id="clientfilter"
                                            type="text"
                                            placeholder="Search.."
                                            value={clientFilter}
                                            onChange={(e) => setClientFilter(e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        Date
                                        <input
                                            className="form-control w-75"
                                            id="datefilter"
                                            type="text"
                                            placeholder="Search.."
                                            value={dateFilter}
                                            onChange={(e) => setDateFilter(e.target.value)}
                                        />
                                    </th>
                                    <th className='align-text-top pt-3'>Amount</th>
                                    <th className='w-10'>
                                        Status
                                        <input
                                            className="form-control w-75"
                                            id="statusfilter"
                                            type="text"
                                            placeholder="Search.."
                                            value={statusFilter}
                                            onChange={(e) => setStatusFilter(e.target.value)}
                                        />
                                    </th>
                                    <th className='text-center align-text-top pt-3'>Action</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {filteredRows.slice(0, numRowsToShow).map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === filteredRows.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {numRowsToShow === 5 && (
                                    <>
                                        <td style={{ width: '10%' }} className='ps-3'>{row[0]}</td>
                                        <td>{row[1]}</td>
                                        <td className='w-10' style={{ color: getStatusColor(row[4]) }}>{row[4]}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-outline-warning' onClick={() => handleShow(row)}>See more</button>
                                        </td>
                                    </>
                                )}
                                {numRowsToShow === 6 && (
                                    <>
                                        <td style={{ width: '10%' }} className='ps-3'>{row[0]}</td>
                                        <td>{row[1]}</td>
                                        <td>{row[2]}</td>
                                        <td>{row[3]}</td>
                                        <td className='w-10' style={{ color: getStatusColor(row[4]) }}>{row[4]}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-outline-warning' onClick={() => handleShow(row)}>See more</button>
                                        </td>
                                    </>
                                )}
                                {numRowsToShow === 20 && (
                                    <>
                                        <td style={{ width: '20%' }} className='ps-3'>{row[0]}</td>
                                        <td>{row[1]}</td>
                                        <td>{row[2]}</td>
                                        <td>{row[3]}</td>
                                        <td className='w-10' style={{ color: getStatusColor(row[4]) }}>{row[4]}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-outline-warning' onClick={() => handleShow(row)}>See more</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {numRowsToShow === 20 && (
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
                )}

                {/* Modal for displaying selected budget details */}
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="budgetDetails"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Budget #{selectedBudget ? selectedBudget[0] : ''}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedBudget && (
                            <form>
                                <div className='container'>
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            CLIENT
                                        </div>
                                        <div className="col-9">
                                            {selectedBudget[1]}
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            DATE
                                        </div>
                                        <div className="col-9">
                                            {selectedBudget[2]}
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            DESCRIPTION
                                        </div>
                                        <div className="col-9">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            PRODUCTS
                                        </div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1' alt="Prints"></img>
                                                </div>
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1' alt="Prints"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            MARGIN
                                        </div>
                                        <div className="col-9">
                                            150-220€
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row mb-5">
                                        <div className="col-3 text-body-secondary">
                                            REPLY
                                        </div>
                                        <div className="col-9">
                                            <textarea className="form-control" placeholder="Reply" id="descriptioninput" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-3 text-body-secondary">
                                            PRICE
                                        </div>
                                        <div className="col-9">
                                            <input type="number" className="form-control" id="budgetprice" placeholder="Price" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <button className='btn btn-success'>Send</button>
                                </div>
                            </form>
                        )}
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default BudgetsListBox;
