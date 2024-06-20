// Componente que mostra a Lista de Tickets
// imports
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import notificationicon from "../images/notification.png";


// para testar antes de termos o backend
const ticketboxcontent = [
    [1, 'Maquina Pifou', '13/13/13', 'Design', '4', 'Paid'],
    [2, 'Chatbot Avariou', '13/06/2024', 'Programming', '3', 'New'],
    [3, 'Não sei', '13/06/2024', 'Design', '2', 'Waiting'],
    [4, 'João Ratão', '13/06/2024', '20000', '1', 'Rejected'],
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

function TicketListBox({ numRowsToShow, showSearchInputs }) {
    const [lgShow, setLgShow] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
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

    const handleTicketIdChange = (e) => {
        setTicketId(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

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
        <div className="box-container d-flex h-100">
            <div className="container bg-white px-0 roundbg">
                <table className='table text-start'>
                    <thead className='text-white pt-2'>
                        <tr>
                            <th>Ticket
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
                        {ticketboxcontent.slice(0, numRowsToShow).map((ticket, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === ticketboxcontent.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {ticket.map((data, colIndex) => {
                                    let color = 'inherit';
                                    // verifica se é o ultimo item do array, e muda a cor dependendo do valor
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
                                    // se nao for o ultimo item do array, herda a cor normal 
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

                {/* Modal para exibir detalhes do ticket selecionado */}
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

export default TicketListBox;
