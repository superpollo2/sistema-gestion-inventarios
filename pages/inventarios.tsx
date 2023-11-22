import React, { useState } from "react";
import { TableInventory } from "@/components/ui/Table/TableInventory";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import { Load } from "@/components/general/Load";
import { GraphInventory } from "@/components/ui/Graph/GraphInventory";
import { Button } from "@/components/ui/Buttons/Button";
import { AddMovement } from "@/components/Dialogs/AddMovement";




const inventory = () => {

  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("01");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { inventories } = useGetInventories(material);
  
  const nameMaterial = materials?.find((r) => r.id === material )?.name ?? "";
  

  const handleAddMovementDialogClick = () => {
    setDialogOpen(true)
  }

  return (
    <PrivateRoute >
      <div className="flex flex-col gap 2 w-4/5">
        <h1 className="titulo my-4">Inventory Page</h1>
        <div className="flex flex-row  gap-4">
          
          <select
            value={material}
            onChange={(e) => {
              setMaterial(e.target.value);
            }}
            className=" border-none bg-[#E85D04] px-2 text-slate-200 rounded-md"
          >
            {materials.map((mat) =>
              <option key={mat.id} value={mat.id}>{mat.name}</option>
            )}
          </select>

          <Button text="Agregar un Movimiento" type={"primary"} handleClick={handleAddMovementDialogClick} />

        </div>

        {material === '' ? (
          <span className=" my-3 text-slate-600 text-lg">Seleccione un material</span>
        ) : (

          isLoading ? (
            <Load />
          ) : (
            <TableInventory inventaries={inventories} />
          )

        )
        }

        

        <GraphInventory />
        <AddMovement material={nameMaterial} open={dialogOpen} setDialogOpen={setDialogOpen} />
      </div>
    </PrivateRoute >

  );
};

export default inventory;
