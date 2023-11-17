import React, { useEffect, useState } from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";
import Table from "@/components/Table/index";

const inventory = () => {
  const [material, setMaterial] = useState("");
  const [materials, setMaterials] = useState([]);
  const [inventory, setInventory] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/api/materials')
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials);
        setMaterial(data.materials[0].id);
    })
  }, []);
  
  useEffect(() => {
    fetch(`http://localhost:3000/api/Inventory?material=${material}`)
    .then((res) => res.json())
    .then((data) => {
      setInventory(data.inventories);
    });
  }, [material]);
  
  return (
    <PrivateRoute >
       <div>
       <h1 className="text-3xl font-bold">Inventory Page</h1>
       <select
        value={material}
        onChange={(e) => {
          setMaterial(e.target.value);
        }}
      >
        {materials.map((mat) => 
        <option>{mat.id}</option>
        )}
      </select>

      <Table data={inventory}  columns={[
        {
          accessor: "id",
          header: "Identificador"
        },
        {
          accessor: "movementType",
          header: "Tipo de movimiento"
        },
        {
          accessor: "quantity",
          header: "Cantidad"
        },
        {
          accessor: "materialId",
          header: "Material"
        },
        {
          accessor: "userId",
          header: "Usuario"
        }]}/>
      </div>

  
      
    </PrivateRoute >

  );
};

export default inventory;
