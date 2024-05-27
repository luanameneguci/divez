import React from 'react';
import '../../App.css';

const list = [
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'Img', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
];

// Split the box3content array into rows of 6 items each
const rows = [];
const itemsPerRow = 6;

for (let i = 0; i < list.length; i += itemsPerRow) {
    rows.push(list.slice(i, i + itemsPerRow));
}


const AdminProductList = () => {
    return (
        <div className="dashboard-content bg-light w-100 h-100">
            <div className='d-flex justify-content-between p-2'>
                <h4 className="title my-2 ">Products (nao gostei da tabela mas está assim no figma)</h4>
                <button className='btn btn-success me-2 my-2'>Add Product</button>
            </div>
            <Products />
        </div>

    );
}

function Products() {
    return <div className="box-container col-auto roundbg d-flex">
        <div className="col-12 bg-white border border-product">
            <table className='container-fluid py-4 border border-light'>
                <thead className='text-black text-center'>
                    <th className="py-2">Image</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Packages</th>
                    <th className="py-2">Category</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Description</th>
                    <th className="py-2 ps-4">Action</th>
                </thead>
                <tbody className='border border-product text-center'>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td
                                    key={colIndex}
                                    className='border-top border-product p-3'
                                    style={{
                                        color: colIndex === 6 ? '#FFD56D' : 'inherit',
                                        padding: '15px 0 15px 0%',
                                    }}
                                >
                                    {data}
                                </td>

                            ))}
                            <td><button className='btn btn-outline-info me-2'>Edit</button>
                                <button className='btn btn-outline-danger'>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}


export default AdminProductList;
