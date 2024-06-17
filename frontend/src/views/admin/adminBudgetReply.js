import React, { useState } from 'react';
import Select from 'react-select';
import '../../App.css';

const categoriesList = [
    "Programming", "Design", "Animation", "etc"
];

const CategoryOptions = ({ dataCategories }) => {
    return dataCategories.map((data, index) => (
        <option key={index} value={index}>
            {data}
        </option>
    ));
};

const packagesList = [
    { value: 'Adobe', label: 'Adobe' },
    { value: 'Essential Programming', label: 'Essential Programming' },
    { value: 'Animation Basics', label: 'Animation Basics' }
];

const productList = [
    { value: 'Photoshop', label: 'Photoshop' },
    { value: 'Figma', label: 'Figma' },
    { value: 'VS Code', label: 'VS Code' }
];

const AdminBudgetReply = () => {
    return (
        <div className="dashboard-content bg-light w-100 p-2 mt-4">
            <div className="container">
                <div className="box-container bg-white roundbg d-flex h-100 p-4 shadow">
                    <div className="row">
                        <h4 className='text-start'>Budget Nº 123</h4>
                        <p className='text-start'>Itens on this budget: 3</p>
                        <hr className='w-75 ms-3'/>
                    </div>

                </div>
            </div>
            <div className="row fixed-bottom-buttons d-flex flex-row m-3">
                <div className="col-6">
                <button type="button" className="btn btn-outline-danger">Create</button>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-outline-danger">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default AdminBudgetReply;