import React from "react";
import "../App.css";
import productData from "../Employees.json";
import "./Employees.css";

function Employees() {
  return (
    <div className="employeeList">
      {productData &&
        productData.map((item) => (
          <li>
            {item.name}, {item.role}
          </li>
        ))}
    </div>
  );
}

export default Employees;
