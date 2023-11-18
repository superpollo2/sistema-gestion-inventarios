import React, { useState } from "react";
import { TableInventory } from "@/components/ui/Table/TableInventory";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import { Load } from "@/components/general/Load";



const inventory = () => {




  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("");
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
            <TableInventory inventaries={inventories} />
          )

        )
        }
      </div>



    </PrivateRoute >

  );
};

export default inventory;
