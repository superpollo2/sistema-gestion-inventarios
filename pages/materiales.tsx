import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import {useGetMaterials} from "@/hooks/useGetMaterials";
import { TableMaterials } from "@/components/ui/Table/TableMaterials";
import { getHeadersMaterials } from "@/services/getheaders";
import { Load } from "@/components/general/Load";

const materials = () => {

  
  const {materials, isLoading} = useGetMaterials();
  const getHeaders = getHeadersMaterials();

  return (

    <PrivateRoute >
      <div>
        <h1 className="text-3xl font-bold">Materials Page</h1>
        {isLoading ? (
          <Load />
        ) : (
            <TableMaterials columns={getHeaders} material={materials}/>
        )
        }
      </div>
    </PrivateRoute >

  );
};

export default materials;
