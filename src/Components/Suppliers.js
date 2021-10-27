import React, { useEffect } from "react";
import "../App.css";
import "./Suppliers.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Suppliers({ sup, setSup }) {
  useEffect(() => {
    fetch("http://192.168.88.92:8085/api/supplier")
      .then((response) => response.json())
      .then((sup) => {
        setSup(sup);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="supplierList">
      {sup &&
        sup.map((item) => (
          <li>
            {item.name} {item.contactName} {item.address} {item.phone}
            
          </li>
        ))}
    </div>
  );
}

export default Suppliers;