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
        <h1 className="text-3xl font-bold">Materials Page</h1>
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
