import '../../App.css';

const box3content = [
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
  1, 'Calls are not being received', '10.12.2024', 'Programming', 1, 'New',
];

// Split the box3content array into rows of 6 items each
const rows3 = [];
const itemsPerRow2 = 6;
for (let i = 0; i < box3content.length; i += itemsPerRow2) {
  rows3.push(box3content.slice(i, i + itemsPerRow2));
}


function BoxThird({ title }) {
    return (
      <div className="box-container bg-white col-auto roundbg d-flex shadow" style={{ height: 360 + "px" }}>
        <div className="col-12">
          <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
            <strong>
              <h4>{title}</h4>
            </strong>
          </span>
          <table className="container-fluid text-start bg-info py-4 roundbg col-12">
            <thead>
              <tr>
                <th className="ps-3 py-2 text-white">Ticket Nº</th>
                <th className="ps-3 py-2 text-white">Ticket title</th>
                <th className="ps-3 py-2 text-white">Ticket Date</th>
                <th className="ps-3 py-2 text-white">Category</th>
                <th className="ps-3 py-2 text-white">Priority</th>
                <th className="ps-3 py-2 text-white">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white roundbg">
              {rows3.map((row, rowIndex) => (
                <tr className="roundbg" key={rowIndex}>
                  {row.map((data, colIndex) => (
                    <td className="ps-3 py-1 border-bottom" key={colIndex} style={{ height: 40 + "px" }}>
                      {data}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default BoxThird;