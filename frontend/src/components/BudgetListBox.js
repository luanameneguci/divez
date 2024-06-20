import React, { useState } from 'react';
import notificationicon from "../images/notification.png";
import Modal from 'react-bootstrap/Modal';

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

const itemsPerRow = 5;
const rows = [];
for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow) {
    rows.push(boxBudgetsContent.slice(i, i + itemsPerRow));
}

function BudgetsListBox() {
    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // State variables for filter inputs
    const [budgetNumberFilter, setBudgetNumberFilter] = useState('');
    const [clientFilter, setClientFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Filtering function
    const filteredRows = rows.filter(row =>
        row[0].toString().includes(budgetNumberFilter) &&
        row[1].toString().toLowerCase().includes(clientFilter.toLowerCase()) &&
        row[2].toString().toLowerCase().includes(dateFilter.toLowerCase()) &&
        row[4].toString().toLowerCase().includes(statusFilter.toLowerCase())
    );

    return (
        <div className="box-container d-flex h-100">
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="text-start pt-3">
                                Budget Nº
                                <input
                                    className="form-control w-75 text-start"
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
                            <th className='text-center'></th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {filteredRows.map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === filteredRows.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 4) {
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                    }
                                    return (
                                        <td key={colIndex} className={'ps-3'} style={{ color: colIndex === 4 ? color : 'inherit' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                                <td className='text-center'>
                                    <button className='btn btn-outline-warning' onClick={() => setLgShow(true)}>See more</button>
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
                {/*NOTA: Fazer com que toda a info venha do ticket ofc*/}
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="ticketedit"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Budget #number
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className='container'>
                                <div className="row mb-5">
                                    <div className="col-3 text-body-secondary">
                                        CLIENT
                                    </div>
                                    <div className="col-9">
                                        João Ratão
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-3 text-body-secondary">
                                        DATE
                                    </div>
                                    <div className="col-9">
                                        19/5/2024
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-3 text-body-secondary">
                                        DESCRIPTION
                                    </div>
                                    <div className="col-9 ">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-3 text-body-secondary">
                                        PRODUTOS
                                    </div>
                                    <div className="col-9">
                                        <div className="row ">
                                            <div className="col-4 d-flex flex-column text-center fw-medium">
                                                Prints
                                                <img src={notificationicon} className='ticket-print mx-auto mt-1'></img>
                                            </div>
                                            <div className="col-4 d-flex flex-column text-center fw-medium">
                                                Prints
                                                <img src={notificationicon} className='ticket-print mx-auto mt-1'></img>
                                            </div>
                                        </div>
                                    </div>
                                    {/* NOTA: fazer com que ele troque de cores dependendo do texto (ainda não consigo fazer) */}
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
                                        <div className="col-9 ">
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
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
            </div >
        );
}

export default BudgetsListBox;

