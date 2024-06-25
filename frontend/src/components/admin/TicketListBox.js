import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

// Date format helper function
const formatDateString = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
};

// For testing, swap with db data
const ticketboxcontent = [
    [1, 'Maquina Pifou', '13/12/2022', 'Design', '4', 'Solved'],
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

function TicketListBox({ numRowsToShow }) {
    const [lgShow, setLgShow] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    // Estados para os filtros
    const [ticketId, setTicketId] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(null); // Changed to null for DatePicker
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual
    const [itemsPerPage, setItemsPerPage] = useState(5); // Número de itens por página

    const handleShow = (ticket) => {
        setSelectedTicket(ticket);
        setLgShow(true);
    };

    // Filtra as linhas com base nos filtros definidos nos estados
    const filteredRows = ticketboxcontent.filter(row => {
        const rowDate = formatDateString(row[2]);
        return (
            row[0].toString().includes(ticketId.toString()) &&
            row[1].toLowerCase().includes(title.toLowerCase()) &&
            (!date || rowDate >= date) && // Compare rowDate with selected date
            row[3].toLowerCase().includes(department.toLowerCase()) &&
            row[4].toString().includes(priority.toString()) &&
            row[5].toLowerCase().includes(status.toLowerCase())
        );
    });

    // Lógica de paginação
    const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item da página
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item da página
    const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem); // Itens da página atual

    // Função para mudar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // UI de paginação
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRows.length / itemsPerPage); i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(i)}>{i}</button>
            </li>
        );
    }

    return (
        <div className="container d-flex px-0 roundbg h-100 pb-3 bg-white shadow">
            <div className="container px-0 roundbg h-100">
                <table className='table text-start my-0'>
                    <thead className='text-white pt-2'>
                        <tr>
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
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            className="form-control w-75"
                                            placeholderText="Select date"
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
                        {currentItems.map((ticket, rowIndex) => (
                            <tr key={rowIndex}>
                                {ticket.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'New') color = '#FFD56D'; // yellow
                                        else if (data === 'Rejected') color = '#EB5757'; // red
                                        else if (data === 'Solved') color = '#00B69B'; // green
                                        else if (data === 'Waiting') color = '#2D9CDB'; // blue
                                    }
                                    return (
                                        <td key={colIndex} className='ps-3' style={{ color, width: colIndex === 0 ? '10%' : '15%' }}>
                                            {data}
                                        </td>
                                    );
                                })}
                                <td className='text-center'>
                                    <Link to='/ticketreply' className='btn btn-outline-warning' onClick={() => handleShow(ticket)}>See more</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {numRowsToShow === 20 && (
                    <nav aria-label="..." className='mt-3 mb-0 d-flex justify-content-center'>
                        <ul className="pagination">
                            {pageNumbers}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default TicketListBox;
