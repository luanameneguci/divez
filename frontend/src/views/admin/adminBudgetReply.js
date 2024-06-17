import React from 'react';
import '../../App.css';

const budgetProducts = [
    {
        nome: "Adobe Photoshop",
        img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
        nome: "Adobe Illustrator",
        img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
    },
    {
        nome: "Adobe Animate",
        img: "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
    },
];

const AdminBudgetReply = () => {
    return (
        <div className="dashboard-content bg-light w-100 p-2 mt-4">
            <div className="container">
                <div className="box-container bg-white roundbg h-100 p-4 shadow">
                    <div className="row">
                        <h4 className='text-start'>Budget Nº 123</h4>
                        <p className='text-start'>Items on this budget: 3</p>
                        <hr className='w-75 ms-3' />
                    </div>
                    <div className="row">
                        {budgetProducts.map((product, index) => (
                            <div key={index} className="d-flex align-items-center mb-3">
                                <img src={product.img} alt={product.nome} className="me-3" style={{ width: '50px', height: '50px' }} />
                                <span>{product.nome}</span>
                            </div>
                        ))}
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
