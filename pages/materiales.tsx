import React, { useState } from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import { useGetMaterials } from "@/hooks/useGetMaterials";
import { TableMaterials } from "@/components/ui/Table/TableMaterials";
import { Load } from "@/components/general/Load";
import { Button } from "@/components/ui/Buttons/Button";
import { CreateNewMaterialDialog } from "@/components/Dialogs/CreateNewMaterialDialog";

const Materials = () => {



  const { materials, isLoading } = useGetMaterials();

  const [newMaterialOpen, setNewMaterialOpen] = useState(false);

  const handleOpenNewRole = () => {
    setNewMaterialOpen((prev) => !prev);
  };


  return (

    <PrivateRoute >

      {isLoading ? (
        <Load />
      ) : (
        <div>
          <div className=" space-y-3 mb-5">
            <h1 className="titulo ">Materiales</h1>
            <Button text="Agregar un Movimiento" type={"primary"} handleClick={handleOpenNewRole} />
          </div>
         
         
          <TableMaterials materials={materials} />
        </div>
      )
      }

      {newMaterialOpen && (
        <CreateNewMaterialDialog
          open={newMaterialOpen}
          setDialogOpen={setNewMaterialOpen}

        />)}
    </PrivateRoute >



  );
};

export default Materials;
