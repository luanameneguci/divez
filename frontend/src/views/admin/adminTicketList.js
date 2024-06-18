import React, { useState } from 'react';
import '../../App.css';
import notificationicon from "../../images/notification.png";
import Modal from 'react-bootstrap/Modal';

const boxBudgetsContent = [
    [1, 'Maquina Pifou', '13/13/13', 'Design', '4', 'New'],
    [2, 'Chatbot Avariou', '13/06/2024', 'Programming', '3', 'New'],
    [3, 'Não sei', '13/06/2024', 'Design', '2', 'New'],
    [4, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [5, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [6, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
    [7, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [8, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [9, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [10, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [11, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [12, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
    [13, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [14, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [15, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [16, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [17, 'João Ratão', '13/06/2024', '20000', '1', 'New'],
    [18, 'João Ratão', '13/06/2024', '20000', '2', 'New'],
];

const AdminTicketList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Tickets</h4>
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

function TicketListBox(props) {
    const [lgShow, setLgShow] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleShow = (ticket) => {
        setSelectedTicket(ticket);
        setLgShow(true);
    };

    return (
        <div className="box-container d-flex h-100">
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="pt-3">Ticket Nº
                                <input className="form-control w-75" id="ticketfilter" type="number" placeholder="Search"></input>
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
                                <input className="form-control w-100" id="priofilter" type="number" placeholder="Search"></input>
                            </th>
                            <th className='w-10'>Status
                                <input className="form-control w-75" id="statusfilter" type="text" placeholder="Search"></input>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {boxBudgetsContent.map((ticket, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === boxBudgetsContent.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {ticket.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'New') color = '#FFD56D'; // amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; // azul
                                        return (
                                            <td key={colIndex} className={'ps-4'} style={{ color: colIndex === 5 ? color : 'inherit' }}>
                                                {data} <button className='removebtstyle' onClick={() => handleShow(ticket)}>...</button>
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={colIndex} className={'ps-3'} style={{ color: colIndex === 5 ? color : 'inherit' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                                        <div className="col-3 text-body-secondary">
                                            CLIENT INFO
                                        </div>
                                        <div className="col-4">
                                            Client Name Client ID
                                        </div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            DATE
                                        </div>
                                        <div className="col-9">
                                            {selectedTicket[2]}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            CATEGORY
                                        </div>
                                        <div className="col-9">
                                            {selectedTicket[3]}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            DESCRIPTION
                                        </div>
                                        <div className="col-9 ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            ATTACHMENTS
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
                                                <div className="col-4 d-flex flex-column text-center fw-medium">
                                                    Prints
                                                    <img src={notificationicon} className='ticket-print mx-auto mt-1'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            STATUS
                                        </div>
                                        <div className="col-4">
                                            {selectedTicket[5]}
                                        </div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            PRIORITY
                                        </div>
                                        <div className="col-4">
                                            {selectedTicket[4]}
                                        </div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            DEPARTMENT
                                        </div>
                                        <div className="col-4">
                                            {selectedTicket[3]}
                                        </div>
                                        <div className="col-5 text-end">
                                            <button className='btn btn-info text-white me-2'>Change</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-3 text-body-secondary">
                                            CLIENT INFO
                                        </div>
                                        <div className="col-4">
                                            Client Name Client ID
                                        </div>
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

const Box = ({ title, number, image }) => {
    return (
        <div className="d-flex justify-content-between align-items-center p-3">
            <div>
                <h6 className="mb-1">{title}</h6>
                <h4 className="fw-bold">{number}</h4>
            </div>
            <div>
                <img src={image} alt="icon" style={{ width: '50px' }} />
            </div>
        </div>
    );
};

export default AdminTicketList;