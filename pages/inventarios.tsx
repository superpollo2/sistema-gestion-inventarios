import React, { useEffect, useState } from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import axios from "axios";
import { getHeadersInventory } from "@/services/getheaders";
import { Table } from "@/components/ui/Table";
import { Load } from "@/components/general/Load";
import { GraphInventory } from "@/components/ui/GraphInventory";



const inventory = () => {



  const getHeaders = getHeadersInventory();
  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("");

  const { inventories } = useGetInventories(material);

  console.log('soy algo', inventories)


  console.log('Fetching inventory', inventory)
  console.log('material fuera del fect', material)
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
            <option key={mat['id']} value={mat['id']}>{mat['name']}</option>
          )}
        </select>
        {material === '' ? (
          <span>seleccione un material</span>
        ) : (

          isLoading ? (
            <Load />
          ) : (
            <Table columns={getHeaders} data={inventories} />
          )

        )
        }
      </div>

      <div>
        <GraphInventory/>
      </div>
    </PrivateRoute >

  );
};

export default inventory;
