import React from 'react';
import '../../App.css';

const budgetProducts = [
    {
        nome: "Adobe Animate",
        img: "https://img.icons8.com/?size=100&id=FK8AfMKCrwOU&format=png&color=000000",
    },
    {
        nome: "Adobe Photoshop",
        img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
        nome: "Adobe Illustrator",
        img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
    },
];

const budgetDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed elit sodales, convallis purus at, pellentesque purus. Mauris at nunc.";


const AdminBudgetReply = () => {
    return (
        <div className="dashboard-content bg-light w-100 p-2x">
            <div className="container">
                <div className="box-container bg-white roundbg h-100 p-4 shadow">
                    <div className="row">
                        <h4 className='text-start'>Budget Nº 123</h4>
                        <p className='text-start'>Items on this budget: 3</p>
                        <hr className='w-75 ms-3' />
                    </div>
                    <div className="row">
                        {budgetProducts.map((product, index) => (
                            <div className="row">
                                <div key={index} className="d-flex align-items-center">
                                    <img src={product.img} alt={product.nome} className="me-3" style={{ width: '70px', height: '70px' }} />
                                    <span className='fw-semibold'>{product.nome}</span>
                                </div>
                                <hr className='w-50 ms-3' />
                            </div>
                        ))}
                    </div>
                    <div className='row'>
                        <h6 className='text-start'>Description</h6>
                        <div className='row'>
                            <span>{budgetDescription}</span>
                        </div>
                    </div>
                    <form action="" className='row d-flex mt-4'>
                        <div className=" mb-3 col-8">
                            <label htmlFor="descriptioninput">Reply</label>
                            <textarea className="form-control" id="descriptioninput" rows="3" maxLength="250"></textarea>
                        </div>
                        <div className=" mb-3 col">
                            <label htmlFor="productpriceinput">Price</label>
                            <input type="number" className="form-control" id="productpriceinput" placeholder="Price" />
                            <div className="row d-flex mt-3 justify-content-end me-4">
                                <div className="col-2 me-2">
                                    <button type="button" className="btn btn-success">Send</button>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-danger">Refuse</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminBudgetReply;
