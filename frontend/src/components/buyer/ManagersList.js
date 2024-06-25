import React, { useState } from 'react';
import '../../App.css';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';

function ManagersList({ managersList, productList }) {
    // Estados para os filtros de entrada
    const [nameFilter, setNameFilter] = useState('');
    const [nifFilter, setNifFilter] = useState('');
    const [mailFilter, setMailFilter] = useState('');
    const [productsFilter, setProductsFilter] = useState('');
    
    // Estado para controlar os dados do modal
    const [modalData, setModalData] = useState(null);
    // Estado para controlar a visibilidade do modal
    const [lgShow, setLgShow] = useState(false);

    // Função de filtragem dos dados
    const filteredRows = managersList.filter(row =>
        row[0].toLowerCase().includes(nameFilter.toLowerCase()) &&
        row[1].includes(nifFilter) &&
        row[2].toLowerCase().includes(mailFilter.toLowerCase()) &&
        row[3].toLowerCase().includes(productsFilter.toLowerCase())
    );

    // Função para mostrar o modal com os detalhes do gerente selecionado
    const handleShow = (row) => {
        setModalData(row[2]); // Salva o e-mail da linha
        setLgShow(true);
    };

    // Função para fechar o modal
    const handleClose = () => {
        setLgShow(false);
        setModalData(null); // Limpa os dados do modal
    };


    /* Future
    // Delete client function
    const deleteClient = (index) => {
        const updatedList = [...managersList];
        updatedList.splice(index, 1);
        setManagersList(updatedList);
    };*/

    return (
        <div className="container bg-white px-0 roundbg shadow h-100 pb-1">
            <table className='table text-start'>
                <thead className='text-white'>
                    <tr>
                        <th className="ps-3 py-2">Name
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={nameFilter}
                                onChange={(e) => setNameFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">NIF
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={nifFilter}
                                onChange={(e) => setNifFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">Mail
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={mailFilter}
                                onChange={(e) => setMailFilter(e.target.value)}
                            />
                        </th>
                        <th className="ps-3 py-2">Products
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={productsFilter}
                                onChange={(e) => setProductsFilter(e.target.value)}
                            />
                        </th>
                        <th className="py-2 align-text-top text-center pt-2">Action</th>
                    </tr>
                </thead>
                <tbody className='text-start roundbg'>
                    {filteredRows.map((row, index) => (
                        <tr key={index}>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[0]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[1]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[2]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[3]}</td>
                            <td className="d-flex justify-content-center">
                                <button onClick={() => handleShow(row)} className="btn btn-outline-info me-2">
                                    Add
                                </button>
                                <button className='btn btn-outline-danger'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                size="lg"
                show={lgShow}
                onHide={handleClose}
                aria-labelledby="addmanager"
                style={{ padding: '10px' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="col">
                            <div className="form-group mb-3">
                                <label htmlFor="manageremailinput">E-mail</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="manageremailinput" 
                                    placeholder="E-mail" 
                                    value={modalData || ''} 
                                    readOnly
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="productsinput">Add Products</label>
                                <Select
                                    id="productsinput"
                                    options={productList}
                                    isMulti
                                    placeholder="Choose Products..."
                                    className="form-control p-0"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-info text-white">Add</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ManagersList;
