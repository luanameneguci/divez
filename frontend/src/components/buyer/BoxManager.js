import React from "react";

function ManagersList({ managers }) {
  return (
    <div>
      {managers.map((manager, index) => (
        <div className="d-flex flex-row px-3 pt-2" key={index}>
          <div className="col-3">
            <img src={manager.photo} alt={manager.nome} className="img-fluid rounded-circle" />
          </div>
          <div className="col-7 ps-4 pt-1">
            <div className="d-flex flex-column">
              <span>
                <strong>{manager.nome}</strong>
              </span>
              <span>{manager.nomeApp}</span>
              <span>{manager.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BoxManager({ title, managers }) {
  return (
    <div className="box-container bg-white col-auto rounded d-flex shadow" style={{ height: "360px" }}>
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{title}</h4>
          </strong>
        </span>
        <div>
          <ManagersList managers={managers} />
        </div>
      </div>
    </div>
  );
}

export default BoxManager;