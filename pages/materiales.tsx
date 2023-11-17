import React, { useEffect, useState } from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";
import Table from "@/components/Table";

const materials = () => {
  const [materials, setMaterials] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/materials')
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials);
      });
  }, [])
  return (

    <PrivateRoute >
      <div>
        <h1 className="text-3xl font-bold">Materials Page</h1>
        <Table data={materials}  columns={[
          {
            accessor: "id",
            header: "Identificador"
          },
          {
            accessor: "name",
            header: "Nombre"
          },
          {
            accessor: "quantity",
            header: "Cantidad"
          },
          {
            accessor: "userId",
            header: "Usuario"
          },
          {
            accessor: "createdAt",
            header: "Creado en"
          },
          {
            accessor: "updatedAt",
            header: "Modificado en"
          }
          ]
        }/>
      </div>
    </PrivateRoute >

  );
};

export default materials;
