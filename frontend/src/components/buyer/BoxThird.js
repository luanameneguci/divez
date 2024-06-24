import "../../App.css";

const box3content = [
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "New",
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "Solved",
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "Unsolved",
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "Waiting",
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "New",
  1,
  "Calls are not being received",
  "10.12.2024",
  "Programming",
  1,
  "New",
];

// Split the box3content array into rows of 6 items each
const rows3 = [];
const itemsPerRow2 = 6;
for (let i = 0; i < box3content.length; i += itemsPerRow2) {
  rows3.push(box3content.slice(i, i + itemsPerRow2));
}

// Function to get status color based on status value
const getStatusColor = (status) => {
  switch (status) {
    case "New":
      return "#FFD56D"; // yellow
    case "Unsolved":
      return "#EB5757"; // red
    case "Solved":
      return "#00B69B"; // green
    case "Waiting":
      return "#2D9CDB"; // blue
    default:
      return "inherit"; // default color
  }
};

function BoxThird({ title }) {
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
                    <td
                      className="ps-3 py-1 border-bottom"
                      key={colIndex}
                      style={{
                        height: "40px",
                        ...(isLastChild && { color: getStatusColor(row[5]) }),
                      }}
                    >
                      {data}
                    </td>
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
