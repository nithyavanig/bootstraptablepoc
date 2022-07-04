import React from "react";
import { columns, rows } from "./data";
import BootstrapTable from "react-bootstrap-table-next";

const SampleTable = () => {
  return (
    <>
      <h1 className="h2">Products</h1>
      <div className="table-container">
        <BootstrapTable
          keyField="id"
          data={rows}
          columns={columns}
        ></BootstrapTable>
      </div>
    </>
  );
};

export default SampleTable;
