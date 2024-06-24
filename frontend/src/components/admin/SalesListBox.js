import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../../App.css';

const salesContent = [
    1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', '1',
    2, 'Chatbot Avariou', '17/03/2022', 'Programming', '3', 
    3, 'Não sei', '13/06/2024', 'Design', '2', 
    4, 'João Ratão', '13/06/2024', '20000', '1', 
    5, 'João Ratão', '13/06/2024', '20000', '1', 
    6, 'João Ratão', '13/06/2024', '20000', '2', 
    7, 'João Ratão', '13/06/2024', '20000', '1', 
    8, 'João Ratão', '13/06/2024', '20000', '1', 
    9, 'João Ratão', '13/06/2024', '20000', '1', 
    10, 'João Ratão', '13/06/2024', '20000', '1', 
    11, 'João Ratão', '13/06/2024', '20000', '1', 
    12, 'João Ratão', '13/06/2024', '20000', '2', 
    13, 'João Ratão', '13/06/2024', '20000', '1', 
    14, 'João Ratão', '13/06/2024', '20000', '1', 
    15, 'João Ratão', '13/06/2024', '20000', '1', 
    16, 'João Ratão', '13/06/2024', '20000', '1', 
    17, 'João Ratão', '13/06/2024', '20000', '1', 
    18, 'João Ratão', '13/06/2024', '20000', '2', 
];

// Split the boxBudgetsContent array into rows of 5 items each
const rows = [];
const itemsPerRow = 5;

for (let i = 0; i < salesContent.length; i += itemsPerRow) {
    rows.push(salesContent.slice(i, i + itemsPerRow));
}

function SalesListBox() {
    const [startDate, setStartDate] = useState(null);
    const [saleId, setSaleId] = useState('');
    const [client, setClient] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const handleSaleIdChange = (e) => {
        setSaleId(e.target.value);
    };

    const handleClientChange = (e) => {
        setClient(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const filteredRows = rows.filter(row => {
        const rowDate = typeof row[2] === 'string' ? new Date(row[2].split('/').reverse().join('-')) : null;
        return (
            (!startDate || !rowDate || rowDate >= startDate) &&
            (!saleId || row[0].toString().includes(saleId)) &&
            (!client || row[1].toLowerCase().includes(client.toLowerCase())) &&
            (!amount || row[3].toString().toLowerCase().includes(amount.toLowerCase())) &&
            (!price || row[4].toString().includes(price))
        );
    });

    // Custom function to parse the date string into a Date object
    const parseDate = (str) => {
        const parts = str.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed in JavaScript Date
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    };

    return (
        <div className="box-container px-0 h-100 shadow">
            <div className="container bg-white px-0 roundbg">
                <table id="datatable" className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="pt-3">Sale ID
                                <input
                                    className="form-control w-75"
                                    id="ticketfilter"
                                    type="number"
                                    value={saleId}
                                    onChange={handleSaleIdChange}
                                />
                            </th>
                            <th>Client
                                <input
                                    className="form-control w-75"
                                    id="titlefilter"
                                    type="text"
                                    placeholder="Search"
                                    value={client}
                                    onChange={handleClientChange}
                                />
                            </th>
                            <th>Date
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy" // Set the date format here
                                    placeholderText="Select Date"
                                    className="form-control w-75"
                                    parseDate={parseDate} // Custom parse function
                                />
                            </th>
                            <th>Products
                                <input
                                    className="form-control w-75"
                                    id="depfilter"
                                    type="text"
                                    placeholder="Search"
                                    value={amount}
                                    onChange={handleAmountChange}
                                />
                            </th>
                            <th>Amount
                                <input
                                    className="form-control w-75"
                                    id="priofilter"
                                    type="number"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {filteredRows.map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === rows.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'New') color = '#FFD56D'; //amarelo
                                        else if (data === 'Rejected') color = '#EB5757'; // vermelho
                                        else if (data === 'Paid') color = '#00B69B'; // verde
                                        else if (data === 'Waiting') color = '#2D9CDB'; //azul
                                        return (
                                            <td key={colIndex} style={{ color: colIndex === 5 ? color : 'inherit' }}>
                                                {data}
                                            </td>
                                        )
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

export default SalesListBox;
