import React, { useState } from "react";
import { TableInventory } from "@/components/ui/Table/TableInventory";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import { getHeadersInventory } from "@/services/getheaders";
import { Load } from "@/components/general/Load";
import { useGetUsers } from "@/hooks/useGetUsers";


const inventory = () => {



  const getHeaders = getHeadersInventory();
  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("");
  const { users } = useGetUsers();

  const { inventories } = useGetInventories(material);


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
            <option key={mat.id} value={mat.id}>{mat.name}</option>
          )}
        </select>
        {material === '' ? (
          <span>seleccione un material</span>
        ) : (

          isLoading ? (
            <Load />
          ) : (
            <TableInventory columns={getHeaders} inventary={inventories} />
          )

        )
        }
      </div>



    </PrivateRoute >

  );
};

export default inventory;
