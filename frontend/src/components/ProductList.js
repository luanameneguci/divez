import React, { useState } from 'react';
import '../App.css';

const list = [
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 2', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
    'https://img.icons8.com/?size=100&id=13631&format=png&color=000000', 'Software 1', 'PackagesList', 'Category', 'Price', 'Description',
];

// Split the list array into rows of 6 items each
const rows = [];
const itemsPerRow = 6;

for (let i = 0; i < list.length; i += itemsPerRow) {
    rows.push(list.slice(i, i + itemsPerRow));
}

function ProductList() {
    const [product, setProduct] = useState('');
    const [packages, setPackages] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleProductChange = (e) => setProduct(e.target.value);
    const handlePackagesChange = (e) => setPackages(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const filteredRows = rows.filter(row => {
        return (
            (!product || row[1].toLowerCase().includes(product.toLowerCase())) &&
            (!packages || row[2].toLowerCase().includes(packages.toLowerCase())) &&
            (!category || row[3].toLowerCase().includes(category.toLowerCase())) &&
            (!price || row[4].toLowerCase().includes(price.toLowerCase())) &&
            (!description || row[5].toLowerCase().includes(description.toLowerCase()))
        );
    });

    /* Futuro
    const deleteProduct = (index) => {
        const updatedList = [...rows];
        updatedList.splice(index, 1);
        setRows(updatedList);
    };*/

    return (
        <div className="box-container col-auto d-flex">
            <div className="container">
                <table className='table container-fluid py-4 border border-light shadow'>
                    <thead className='text-white'>
                        <tr>
                            <th className="py-2 align-text-top pt-2 ps-4">Image</th>
                            <th className="py-2">Product
                                <input
                                    className="form-control w-75"
                                    type="text"
                                    placeholder="Search"
                                    value={product}
                                    onChange={handleProductChange}
                                />
                            </th>
                            <th className="py-2">Packages
                                <input
                                    className="form-control w-75 "
                                    type="text"
                                    placeholder="Search"
                                    value={packages}
                                    onChange={handlePackagesChange}
                                />
                            </th>
                            <th className="py-2">Category
                                <input
                                    className="form-control w-75 "
                                    type="text"
                                    placeholder="Search"
                                    value={category}
                                    onChange={handleCategoryChange}
                                />
                            </th>
                            <th className="py-2">Price
                                <input
                                    className="form-control w-75 "
                                    type="text"
                                    placeholder="Search"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </th>
                            <th className="py-2">Description
                                <input
                                    className="form-control w-75 "
                                    type="text"
                                    placeholder="Search"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                />
                            </th>
                            <th className="align-text-top pt-2 ps-1">Action</th>
                        </tr>
                    </thead>
                    <tbody className='border border-product'>
                        {filteredRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className='p-3'>
                                {row.map((data, colIndex) => (
                                    colIndex === 0 ? (
                                        <td
                                            key={colIndex}
                                        >
                                            <img src={data} alt="Product" className="me-3" style={{ width: '70px', height: '70px' }} />
                                        </td>
                                    ) : (
                                        <td
                                            key={colIndex}
                                            className="align-text-top"
                                        >
                                            {data}
                                        </td>
                                    )
                                ))}
                                {/**/}
                                <td className="d-flex justify-content-center p-4">
                                    <button className='btn btn-outline-info me-2'>Edit</button>
                                    <button className='btn btn-outline-danger'
                                    //onClick={() => deleteProduct(rowIndex)} futuro
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
