import React, { useEffect } from "react";
import "../App.css";
import "./Products.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Products({ pro, setPro }) {
  useEffect(() => {
    fetch("http://192.168.88.92:8085/api/product")
      .then((response) => response.json())
      .then((pro) => {
        setPro(pro);
      })
      .catch((err) => console.log(err));
  }, []);

  const handelOnDelete = (barcode) => {
    const url = "http://192.168.88.92:8085/api/supplier/delete/".concat(barcode);
    fetch(url, { method: "DELETE" })
      .then((res) => {
        console.log(barcode);
        setPro(pro.filter((row) => row.barcode !== barcode));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="productList">
      {pro &&
        pro.map((item) => (
          <li>
           {item.productName}  {item.quantity}  {item.sellPrice} {item.unitOfMeasurement} {item.name} {item.barcode}
            <Button
              size="large"
              className="deleteButton"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handelOnDelete(item.barcode)}
            />
          </li>
        ))}
    </div>
  );
}

export default Products;
