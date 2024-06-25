import "../../App.css";
import useBuyerTickets from "../buyer/Dashboard";
import React from "react"


// Função para obter a cor do status com base no valor do status
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}; 

function BoxThird({ title, rows3 }) {

  return (
    <div
      className="box-container bg-white col-auto roundbg d-flex shadow"
      style={{ height: 360 + "px" }}
    >
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
                {row.map((data, colIndex) => {
                  const isLastChild = colIndex === row.length - 1;
                  return (
                    <React.Fragment key={colIndex}>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data.idTicket}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data.ticketName}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {formatDate(data.ticketData)}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data.idTicketDepartment}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data.ticketPriority}
                    </td>
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data.idTicketstatus}
                    </td>
                    </React.Fragment>
                    
                    
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BoxThird;
