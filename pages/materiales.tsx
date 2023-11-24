import React, { useState } from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { TableMaterials } from "@/components/ui/Table/TableMaterials";
import { Load } from "@/components/general/Load";
import { Button } from "@/components/ui/Buttons/Button";
import { CreateNewMaterialDialog } from "@/components/Dialogs/CreateNewMaterialDialog";

const materials = () => {


  const { materials, isLoading } = useGetMaterials();

  const [newMaterialOpen, setNewMaterialOpen] = useState(false);

  const handleOpenNewRole = () => {
    setNewMaterialOpen((prev) => !prev);
  };


  return (

    <PrivateRoute >
      <div>
        <div className="p-8 pl-0">
          <h1 className="titulo pl-1">Materiales</h1>
        </div>

        <Button text="Agregar un Movimiento" type={"primary"} handleClick={handleOpenNewRole} />

        {isLoading ? (
          <Load />
        ) : (
          <TableMaterials materials={materials} />
        )
        }
      </div>
      {newMaterialOpen && (
        <CreateNewMaterialDialog
          open={newMaterialOpen}
          setDialogOpen={setNewMaterialOpen}

        />)}
    </PrivateRoute >



  );
};

export default materials;
