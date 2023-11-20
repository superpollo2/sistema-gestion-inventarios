import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import {useGetMaterials} from "@/hooks/useGetMaterials";
import { TableMaterials } from "@/components/ui/Table/TableMaterials";
import { Load } from "@/components/general/Load";

const materials = () => {

  
  const {materials, isLoading} = useGetMaterials();


  return (

    <PrivateRoute >
      <div>
        <div className="p-8 pl-0">
        <h1 className="titulo pl-1">Materiales</h1>
        </div>
        
        {isLoading ? (
          <Load />
        ) : (
            <TableMaterials materials={materials}/>
        )
        }
      </div>
    </PrivateRoute >

  );
};

export default materials;
