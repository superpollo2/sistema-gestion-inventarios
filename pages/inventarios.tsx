import React, { useState } from "react";
import { TableInventory } from "@/components/ui/Table/TableInventory";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { useGetInventories } from "@/hooks/useGetInventories";
import { Load } from "@/components/general/Load";
import { GraphInventory } from "@/components/ui/Graph/GraphInventory";
import { Button } from "@/components/ui/Buttons/Button";
import { AddMovement } from "@/components/Dialogs/AddMovement";
import { Material } from "@prisma/client";




const inventory = () => {

  const { materials, isLoading } = useGetMaterials();
  const [material, setMaterial] = useState("");
  const [materialId, setMaterialId] = useState("");
  const [materialData, setMaterialData] = useState<Material | null>(null); // [materialId, setMaterialId
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { inventories } = useGetInventories(materialId);

  const nameMaterial = materials?.find((r) => r.id === materialId)?.name ?? "";
  const handleMaterialChange = (e: { target: { value: any; }; }) => {
    const selectedId = e.target.value;
    const selectedMaterial = materials.find((mat) => mat.id === selectedId);

    setMaterialId(selectedId);
    setMaterialData(selectedMaterial as Material);
  };

  const handleAddMovementDialogClick = () => {
    setDialogOpen(true)
  }

  return (
    <PrivateRoute >
      <div className="flex flex-col gap-4 w-4/5">

        <h1 className="titulo my-4">Inventory Page</h1>

        <div className="flex flex-row  gap-4">

          <select
            value={materialId}
            onChange={handleMaterialChange}
            className=" border-none bg-[#E85D04] px-2 text-slate-200 rounded-md"
          >
            {materials.map((mat) =>
              <option key={mat.id} value={mat.id}>{mat.name}</option>
            )}
          </select>

          <Button text="Agregar un Movimiento" type={"primary"} handleClick={handleAddMovementDialogClick} />

        </div>

        <div className="flex flex-col gap-3">
          {materialId === '' ? (
            <span className=" my-3 text-slate-600 text-lg">Seleccione un material</span>
          ) : (

            isLoading ? (
              <Load />
            ) : (
              <TableInventory inventaries={inventories} material={materialData} />
            )

          )
          }

          <div className="fle flex-col gap-2">
            <span className="titulo">Gráfica de evolución de saldos</span>
            <GraphInventory />
          </div>

        </div>

        <AddMovement material={nameMaterial} open={dialogOpen} setDialogOpen={setDialogOpen} materialId={materialId} />

      </div>
    </PrivateRoute >

  );
};

export default inventory;
