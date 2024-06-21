import React, { useState } from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import notificationicon from "../images/notification.png";

// For testing, swap with db data
const ticketboxcontent = [
    [1, 'Maquina Pifou', '13/12/2022', 'Design', '4', 'Paid'],
    [2, 'Chatbot Avariou', '15/06/2024', 'Programming', '3', 'New'],
    [3, 'Não sei', '13/06/2024', 'Design', '2', 'Waiting'],
    [4, 'João Ratão', '13/06/2024', '20000', '1', 'Rejected'],
    [5, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [6, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
    [7, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [8, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [9, 'João Ratão', '22/06/2024', '20000', '1', 'New'],
    [10, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [11, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [12, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
    [13, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [14, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [15, 'João Ratão', '31/06/2024', '20000', '1', 'New'],
    [16, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [17, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [18, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
];

// main function, returns table with data
function TicketListBox({ numRowsToShow }) {
    const [lgShow, setLgShow] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    // State for filters
    const [ticketId, setTicketId] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleShow = (ticket) => {
        setSelectedTicket(ticket);
        setLgShow(true);
    };

    // Filtering the tickets based on input values
    const filteredTickets = ticketboxcontent.filter(ticket => {
        return (
            (ticketId === '' || ticket[0].toString().includes(ticketId)) &&
            (title === '' || ticket[1].toLowerCase().includes(title.toLowerCase())) &&
            (date === '' || ticket[2].includes(date)) &&
            (department === '' || ticket[3].toLowerCase().includes(department.toLowerCase())) &&
            (priority === '' || ticket[4].toString().includes(priority)) &&
            (status === '' || ticket[5].toLowerCase().includes(status.toLowerCase()))
        );
    });

    return (
        <div className="box-container d-flex px-0">
            <div className="container px-0">
                <table className='table text-start shadow'>
                    <thead className='text-white pt-2'>
                        <tr>
                            {/* Show filters only on tables with 20 numRowsToShow */}
                            {numRowsToShow < 20 ? (
                                <>
                                    <th style={{ width: '10%' }}>Ticket</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Department</th>
                                    <th className='w-10'>Priority</th>
                                    <th className='w-10'>Status</th>
                                    <th>Action</th>
                                </>
                            ) : (
                                <>
                                    <th>
                                        Ticket
                                        <input
                                            className="form-control w-75"
                                            type="number"
                                            placeholder="Search"
                                            value={ticketId}
                                            onChange={(e) => setTicketId(e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        Title
                                        <input
                                            className="form-control w-75"
                                            type="text"
                                            placeholder="Search"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        Date
                                        <input
                                            className="form-control w-75"
                                            type="text"
                                            placeholder="Search"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </th>
                                    <th>
                                        Department
                                        <input
                                            className="form-control w-75"
                                            type="text"
                                            placeholder="Search"
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                        />
                                    </th>
                                    <th className='w-10'>
                                        Priority
                                        <input
                                            className="form-control w-100"
                                            type="number"
                                            placeholder="Search"
                                            value={priority}
                                            onChange={(e) => setPriority(e.target.value)}
                                        />
                                    </th>
                                    <th className='w-10'>
                                        Status
                                        <input
                                            className="form-control w-75"
                                            type="text"
                                            placeholder="Search"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        />
                                    </th>
                                    <th className='text-center align-text-top pt-3'>Action</th>

                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.slice(0, numRowsToShow).map((ticket, rowIndex) => (
                            <tr key={rowIndex}>
                                {ticket.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'New') color = '#FFD56D'; // yellow
                                        else if (data === 'Rejected') color = '#EB5757'; // red
                                        else if (data === 'Paid') color = '#00B69B'; // green
                                        else if (data === 'Waiting') color = '#2D9CDB'; // blue
                                    }
                                    return (
                                        <td key={colIndex} className='ps-3' style={{ color, width: colIndex === 0 ? '10%' : '15%' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                                <td className='text-center'>
                                    <button className='btn btn-outline-warning' onClick={() => handleShow(ticket)}>See more</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Show table page switcher if numRowsToShow === 20 */}
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
                {/* Modal for displaying selected ticket details */}
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="ticketedit"
                    style={{ padding: '10px' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Ticket #{selectedTicket ? selectedTicket[0] : ''}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedTicket && (
                            <form>
                                <div className='container'>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">CLIENT INFO</div>
                                        <div className="col-4">Client Name Client ID</div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">DATE</div>
                                        <div className="col-9">{selectedTicket[2]}</div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">CATEGORY</div>
                                        <div className="col-9">{selectedTicket[3]}</div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">DESCRIPTION</div>
                                        <div className="col-9">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">ATTACHMENTS</div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1' alt="Prints" />
                                                </div>
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1' alt="Prints" />
                                                </div>
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1' alt="Prints" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">STATUS</div>
                                        <div className="col-4">{selectedTicket[5]}</div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">PRIORITY</div>
                                        <div className="col-4">{selectedTicket[4]}</div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">DEPARTMENT</div>
                                        <div className="col-4">{selectedTicket[3]}</div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">CLIENT INFO</div>
                                        <div className="col-4">Client Name Client ID</div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default TicketListBox;
