import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Importa o componente DatePicker do pacote react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Importa os estilos CSS para o DatePicker
import '../../App.css'; // Importa estilos específicos para esta componente

// Dados de exemplo das vendas
const salesContent = [
    [1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', 1],
    [2, 'Chatbot Avariou', '17/03/2022', 'Programming', 3],
    [3, 'Não sei', '13/06/2024', 'Design', 2],
    [4, 'João Ratão', '13/06/2024', 20000, 1],
    [1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', 1],
    [2, 'Chatbot Avariou', '17/03/2022', 'Programming', 3],
    [3, 'Não sei', '13/06/2024', 'Design', 2],
    [4, 'João Ratão', '13/06/2024', 20000, 1],
    [1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', 1],
    [2, 'Chatbot Avariou', '17/03/2022', 'Programming', 3],
    [3, 'Não sei', '13/06/2024', 'Design', 2],
    [4, 'João Ratão', '13/06/2024', 20000, 1],
    [1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', 1],
    [2, 'Chatbot Avariou', '17/03/2022', 'Programming', 3],
    [3, 'Não sei', '13/06/2024', 'Design', 2],
    [4, 'João Ratão', '13/06/2024', 20000, 1],
    [1, 'Maquina Pifou', '15/06/2024', 'Amazon Prime', 1],
    [2, 'Chatbot Avariou', '17/03/2022', 'Programming', 3],
    [3, 'Não sei', '13/06/2024', 'Design', 2],
    [4, 'João Ratão', '13/06/2024', 20000, 1],
];

// Para guardar o conteudo que vem da db
const rows = salesContent;

// Componente SalesListBox
const SalesListBox = () => {
    // Estados para controle de página, filtro de data, filtros de pesquisa e itens por página
    const [currentPage, setCurrentPage] = useState(1); // Estado para página atual
    const [startDate, setStartDate] = useState(null); // Estado para data de início do filtro
    const [saleId, setSaleId] = useState(''); // Estado para filtro de ID de venda
    const [client, setClient] = useState(''); // Estado para filtro de cliente
    const [amount, setAmount] = useState(''); // Estado para filtro de quantidade
    const [price, setPrice] = useState(''); // Estado para filtro de preço
    const [itemsPerPage, setItemsPerPage] = useState(5); // Estado para quantidade de itens por página

    // Função para lidar com a mudança de data no DatePicker
    const handleDateChange = (date) => {
        setStartDate(date);
    };

    // Função para lidar com a mudança no filtro de ID de venda
    const handleSaleIdChange = (e) => {
        setSaleId(e.target.value);
    };

    // Função para lidar com a mudança no filtro de cliente
    const handleClientChange = (e) => {
        setClient(e.target.value);
    };

    // Função para lidar com a mudança no filtro de quantidade
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    // Função para lidar com a mudança no filtro de preço
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    // Filtra as linhas com base nos filtros definidos pelo usuário
    const filteredRows = rows.filter((row) => {
        const rowDate = new Date(row[2].split('/').reverse().join('-')); // Converte a data para um formato manipulável
        return (
            (!startDate || rowDate >= startDate) && // Filtra pela data (se definida)
            (!saleId || row[0].toString().includes(saleId)) && // Filtra pelo ID de venda (se definido)
            (!client || row[1].toLowerCase().includes(client.toLowerCase())) && // Filtra pelo cliente (se definido)
            (!amount || row[3].toString().toLowerCase().includes(amount.toLowerCase())) && // Filtra pela quantidade (se definida)
            (!price || row[4].toString().includes(price)) // Filtra pelo preço (se definido)
        );
    });

    // Lógica de paginação
    const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item na página atual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item na página atual
    const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem); // Itens a serem exibidos na página atual

    // Função para mudar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // UI da paginação
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredRows.length / itemsPerPage); i++) {
        pageNumbers.push(
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(i)}>{i}</button>
            </li>
        );
    }

    // Renderização do componente
    return (
        <div className="box-container px-0 h-100 shadow roundbg">
            <div className="container bg-white px-0 roundbg">
                <table id="datatable" className='table text-start'>
                    <thead className='text-white'>
                        <tr>
                            <th className="pt-3">ID Venda
                                <input
                                    className="form-control w-75"
                                    id="ticketfilter"
                                    placeholder="Pesquisar"
                                    type="number"
                                    value={saleId}
                                    onChange={handleSaleIdChange}
                                />
                            </th>
                            <th>Cliente
                                <input
                                    className="form-control w-75"
                                    id="titlefilter"
                                    type="text"
                                    placeholder="Pesquisar"
                                    value={client}
                                    onChange={handleClientChange}
                                />
                            </th>
                            <th>Data
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy" // Define o formato da data
                                    placeholderText="Selecionar Data"
                                    className="form-control w-75"
                                />
                            </th>
                            <th>Produtos
                                <input
                                    className="form-control w-75"
                                    id="depfilter"
                                    type="text"
                                    placeholder="Pesquisar"
                                    value={amount}
                                    onChange={handleAmountChange}
                                />
                            </th>
                            <th>Quantidade
                                <input
                                    className="form-control w-75"
                                    id="priofilter"
                                    type="number"
                                    placeholder="Pesquisar"
                                    value={price}
                                    onChange={handlePriceChange}
                                />
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {currentItems.map((row, rowIndex) => (
                            <tr key={rowIndex} style={{ borderRadius: rowIndex === rows.length - 1 ? '0 0 15px 15px' : '0' }}>
                                {row.map((data, colIndex) => {
                                    let color = 'inherit';
                                    if (colIndex === 5) {
                                        if (data === 'Novo') color = '#FFD56D'; // amarelo
                                        else if (data === 'Rejeitado') color = '#EB5757'; // vermelho
                                        else if (data === 'Pago') color = '#00B69B'; // verde
                                        else if (data === 'Aguardando') color = '#2D9CDB'; // azul
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

                {/* Paginação */}
                <nav aria-label="...">
                    <ul className="pagination pb-2 justify-content-center">
                        {pageNumbers}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SalesListBox;
