import React from "react";
import "./Dashboard1.css";
import { Link } from "react-router-dom";
import XLSX from "sheetjs-style";
const Dashboard1 = () => {
  const handleUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <div className="navigate">
        <Link to={"/adddata"}>
          <button className="nav-btn">Add data</button>
        </Link>
        <Link to={"/dashboard2"}>
          <button className="nav-btn">View data</button>
        </Link>
      </div>
      <form onSubmit={handleUpload}>
        <input className="upload" type="file" />
        <button className="button">Upload</button>
      </form>
    </div>
  );
};

export default Dashboard1;
