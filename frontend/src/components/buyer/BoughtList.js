function BoughtList({rows}) {
    return <div className="box-container bg-white col-auto roundbg d-flex shadow mx-4">
    <div className="col-12 bg-info roundbg">
        <table className='container-fluid text-start bg-info py-4 roundbg table3'>
            <thead className='text-white'>
                <th className="ps-3 py-2">ID</th>
                <th className="ps-3 py-2">Product</th>
                <th className="ps-3 py-2">Date</th>
                <th className="ps-3 py-2">Amount</th>
                <th className="ps-3 py-2">Price</th>
            </thead>
            <tbody className='bg-white'>
            {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((data, colIndex) => (
                           <td
                           key={colIndex}
                           style={{ 
                               color: colIndex === 5 ? '#FFD56D' : 'inherit',
                               padding: '10px 0 10px 1%' 
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

export default BoughtList;