import React, { useState } from "react";
import { TableInventory } from "@/components/ui/Table/TableInventory";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import { getHeadersInventory } from "@/services/getheaders";
import { Load } from "@/components/general/Load";
import { useGetUsers } from "@/hooks/useGetUsers";
import { GraphInventory } from "@/components/ui/Graph/GraphInventory";
import { Button } from "@/components/ui/Buttons/Button";
import { AddMovement } from "@/components/Dialogs/AddMovement";

const inventory = () => {

  const getHeaders = getHeadersInventory();
  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("");
  useGetUsers();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { inventories } = useGetInventories(material);
  

  const handleAddMovementDialogClick = () => {
    setDialogOpen(true)
  }

  return (
    <PrivateRoute >
      <div className="flex flex-col gap 2 w-4/5">
        <h1 className="text-3xl font-bold">Inventory Page</h1>

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

        <div className="flex flex-row gap-4">
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

          <Button text="Agregar un Movimiento" type={"primary"} handleClick={handleAddMovementDialogClick} />
        </div>

        <GraphInventory />
        <AddMovement material={material} open={dialogOpen} setDialogOpen={setDialogOpen} />
      </div>
    </PrivateRoute >

  );
};

export default inventory;
