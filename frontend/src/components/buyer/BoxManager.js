import React from "react";

function BoxManager({ title, managers }) {
  const transformedManagers = createDataArraysManager(managers);
  return (
    <div
      className="box-container bg-white col-auto roundbg d-flex shadow"
      style={{ height: "360px" }}
    >
      <div className="col-12">
        <span className="box-title d-flex justify-content-start pt-3 ps-3 pb-3">
          <strong>
            <h4>{title}</h4>
          </strong>
        </span>
        <div>
          <ManagersList managers={transformedManagers} />
        </div>
      </div>
    </div>
  ); 
}

function createDataArraysManager(manager) {
  // Initialize the result array
  let managers = [];
  // Loop through the data and create sub-arrays
  for (let i = 0; i < manager.length && managers.length < 3; i++) {
    let subArray = [
      manager[i].nome,
      manager[i].nomeApp,
      manager[i].status,
      manager[i].photo,
    ];
    managers.push(subArray);
  }
  return managers;
}

function ManagersList({ managers }) {
  return (
    <div className="managers-list">
      {managers.map((manager, index) => (
        <div
          key={index}
          className="d-flex justify-content-between border-bottom align-items-center"
          style={{ height: "97px" }}
        >
          <UserStatus manager={manager} />
        </div>
      ))}
    </div>
  );
}

const UserStatus = ({ manager }) => {
  const statusColor = manager[2] === "Online" ? "LightGreen" : "LightGrey";
  return (
    <div className="col-12 d-flex align-items-center p-3 justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src={manager[3]}
          alt={`${manager[1]}`}
          className="mr-3"
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <div className="d-flex flex-column align-items-start">
          <h5 className="mb-0">{manager[0]}</h5>
          <h6 className="mb-0">{manager[1]}</h6>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div
          className="ms-auto me-1"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: statusColor,
          }}
        ></div>
        <p className="mb-0">{manager[2]}</p>
      </div>
    </div>
  );
};

export default BoxManager;
