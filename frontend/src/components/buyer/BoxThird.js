import React from "react";
import useBuyerTickets from "../buyer/Dashboard";


function BoxThird({ title }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "#FFD56D"; // amarelo
      case "Rejected":
        return "#EB5757"; // vermelho
      case "Closed":
        return "#00B69B"; // verde
      case "Waiting":
        return "#2D9CDB"; // azul
      default:
        return "inherit"; // cor padrão
    }
  };
  const box3content = useBuyerTickets();

  // Ensure box3content is populated before rendering
  if (!box3content || box3content.length === 0) {
    return <div>Loading...</div>; // Optionally show loading indicator
  }

  // Divide the array box3content into rows of 6 items each
  const rows3 = [];
  const itemsPerLine = 6;
  for (let i = 0; i < box3content.length; i += itemsPerLine) {
    rows3.push(box3content.slice(i, i + itemsPerLine));
  }

  return (
    <div className="box-container bg-white col-auto roundbg d-flex shadow" style={{ height: "360px" }}>
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
              <th className="ps-3 py-2 text-white">Ticket Title</th>
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
                  <React.Fragment key={colIndex}>
                    <td
                      className="ps-3 py-1 border-bottom"
                      style={{ height: "40px", color: getStatusColor(data.status) }}
                    >
                      {data.idTicket}
                    </td>
                    <td className="ps-3 py-1 border-bottom" style={{ height: "40px" }}>
                      {data.ticketTitle}
                    </td>
                    <td className="ps-3 py-1 border-bottom" style={{ height: "40px" }}>
                      {data.ticketDate}
                    </td>
                    <td className="ps-3 py-1 border-bottom" style={{ height: "40px" }}>
                      {data.category}
                    </td>
                    <td className="ps-3 py-1 border-bottom" style={{ height: "40px" }}>
                      {data.priority}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      style={{ height: "40px", color: getStatusColor(data.status) }}
                    >
                      {data.status}
                    </td>
                  </React.Fragment>
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
