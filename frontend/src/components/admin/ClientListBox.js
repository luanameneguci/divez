import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClientListBox({ clientList }) {
    const [nameFilter, setNameFilter] = useState(''); // Estado para filtro por nome
    const [nifFilter, setNifFilter] = useState(''); // Estado para filtro por NIF
    const [mailFilter, setMailFilter] = useState(''); // Estado para filtro por email
    const [accountTypeFilter, setAccountTypeFilter] = useState(''); // Estado para filtro por tipo de conta
    const [currentPage, setCurrentPage] = useState(1); // Estado para página atual
    const [itemsPerPage] = useState(5); // Número de itens por página

    // Função para filtrar os itens da lista de clientes
    const filteredRows = clientList.filter(row =>
        row[0].toLowerCase().includes(nameFilter.toLowerCase()) && // Filtrar por nome (case-insensitive)
        row[1].includes(nifFilter) && // Filtrar por NIF
        row[2].toLowerCase().includes(mailFilter.toLowerCase()) && // Filtrar por email (case-insensitive)
        row[3].toLowerCase().includes(accountTypeFilter.toLowerCase()) // Filtrar por tipo de conta (case-insensitive)
    );

    // Paginação
    const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item da página atual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item da página atual
    const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem); // Itens a serem exibidos na página atual

    // Função para mudar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // UI da paginação
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRows.length / itemsPerPage); i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button onClick={() => paginate(i)} className="page-link">{i}</button>
            </li>
        );
    }

    // Retorna a tabela com os clientes
    return (
        <div className="container bg-white px-0 roundbg shadow h-100">
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
                        <th className="ps-3 py-2">Account Type
                            <input
                                className="form-control w-75"
                                type="text"
                                placeholder="Search"
                                value={accountTypeFilter}
                                onChange={(e) => setAccountTypeFilter(e.target.value)}
                            />
                        </th>
                        <th className="py-2 align-text-top text-center pt-2">Action</th>
                    </tr>
                </thead>
                <tbody className='text-start'>
                    {currentItems.map((row, index) => (
                        <tr key={index}>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[0]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[1]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[2]}</td>
                            <td style={{ padding: '15px 0 15px 2%' }}>{row[3]}</td>
                            <td className="d-flex justify-content-center">
                                <Link to="/client" className="btn btn-outline-info me-2">
                                    See more
                                </Link>
                                <button className='btn btn-outline-danger'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="...">
                <ul className="pagination pb-2 justify-content-center">
                    {pageNumbers}
                </ul>
            </nav>
        </div>
    );
}

export default ClientListBox;
