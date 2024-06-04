import React from 'react';
import '../../App.css';

const list = [
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
    1, 'Software 1', '01-02-2024', 'Amount', 'Price',
];

// Split the box3content array into rows of 6 items each
const rows = [];
const itemsPerRow = 5;

for (let i = 0; i < list.length; i += itemsPerRow) {
    rows.push(list.slice(i, i + itemsPerRow));
}


const BuyerPurchasesList = () => {
    return (
        <div className="dashboard-content bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2'>
                <h4 className="title my-2 ">Purchases</h4>
            </div>
            <Products />
        </div>

    );
}

function Products() {
    return <div className="box-container col-auto d-flex shadow">
        <div className="col-12 bg-white">
            <table className='container-fluid py-4'>
                <thead className='text-black text-center bg-info'>
                    <th className="py-2">ID</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Price</th>
                </thead>
                <tbody className='text-center rounded'>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td
                                    key={colIndex}
                                    className='border-bottom p-3'
                                    style={{
                                        color: colIndex === 6 ? '#FFD56D' : 'inherit',
                                        padding: '15px 0 15px 0%',
                                    }}
                                >
                                    {data}
                                </td>

                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}


export default BuyerPurchasesList;
