// components/BoxTable.js
import React from "react";

function BoxTable({ title, rows }) {
  return (
    <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: 360 + "px" }}>
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{title}</h4>
          </strong>
        </span>
        <table className="container-fluid text-start bg-info py-4 rounded col-11">
          <thead>
            <tr>
              <th className="ps-3 py-2 text-white">Budget Nº</th>
              <th className="ps-3 py-2 text-white">Budget title</th>
              <th className="ps-3 py-2 text-white">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white rounded">
            {rows.map((row, rowIndex) => (
              <tr className="rounded" key={rowIndex}>
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

export default BoxTable;
