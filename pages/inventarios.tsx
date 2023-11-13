import React from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";
import Table from "@/components/Table/index";
const inventory = () => {
  return (

    <PrivateRoute >
       <div>
       <h1 className="text-3xl font-bold">Inventory Page</h1>
      <Table rows={[
      {
        "id": 123,
        "name": "Juan Pepe"
      },
      {
        "id": 456,
        "name": "Don Rodrigo"
      }
    ]}  columns={[
      {
        accessor: "id",
        header: "Document"
      },
      {
        accessor: "name",
        header: "Full Name"
      }]}/>
    </div>

  
      
    </PrivateRoute >

  );
};

export default inventory;
