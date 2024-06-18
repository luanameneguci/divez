import React, { useState } from 'react';
import '../../App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* A tabela está a filtrar corretamente, o datepicker está bue feio*/
const boxBudgetsContent = [
    1, 'Maquina Pifou', '13/13/13', 'Design', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '2',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '2',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '1',
    1, 'João Ratão', '13/06/2024', '20000', '2',
];

const rows = [];
const itemsPerRow = 5;

for (let i = 0; i < boxBudgetsContent.length; i += itemsPerRow) {
    rows.push(boxBudgetsContent.slice(i, i + itemsPerRow));
}

const AdminSalesList = () => {
    return (
        <div className="dashboard-content bg-light w-100">
            <h4 className="title my-2">Sales</h4>
            <div className="container">
                <div className="row my-4">
                    <SalesList />
                </div>
            </div>
        </div>
    );
}

function SalesList(props) {
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
        const rowDate = new Date(row[2].split('/').reverse().join('-'));
        return (
            (!startDate || rowDate >= startDate) &&
            (!saleId || row[0].toString().includes(saleId)) &&
            (!client || row[1].toLowerCase().includes(client.toLowerCase())) &&
            (!amount || row[3].toLowerCase().includes(amount.toLowerCase())) &&
            (!price || row[4].toString().includes(price))
        );
    });

    return (
        <div className="box-container h-100">
            <div className="container bg-white px-0 roundbg">
                <table id="datatable" className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="text-end pt-3">Sale ID
                                <input
                                    className="form-control w-75 ms-auto text-end"
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
                                    className="form-control w-75"
                                    placeholderText="Select Date"
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
        </div>
    );
}

export default AdminSalesList;
