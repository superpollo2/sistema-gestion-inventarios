import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import Table from "@/components/Table/index";

const Home = () => { 
  return (
    <div>
      <Table data={[
        {
          "id": 123,
          "fecha": "05/11/2023",
          "entrada": 50,
          "salida": 0,
          "responsable" : "pepe el grillo"
        },
        {
          "id": 123,
          "fecha": "05/11/2023",
          "entrada": 50,
          "salida": 0,
          "responsable" : "pepe el grillo"
        }
      ]}  columns={[
        {
          accessor: "id",
          header: "Identificador"
        },
        {
          accessor: "fecha",
          header: "Fecha"
        },
        {
          accessor: "entrada",
          header: "Entrada"
        },
        {
          accessor: "salida",
          header: "Salida"
        },
        {
          accessor: "responsable",
          header: "Responsable"
        }]}/>
        </div>

  );
};
