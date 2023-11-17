import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import {useGetMaterials} from "@/hooks/useGetMaterials";
import { Table } from "@/components/ui/Table";
import { getHeadersMaterials } from "@/services/getheaders";
import { Load } from "@/components/general/Load";

const materials = () => {

  
  const {materials, isLoading, error} = useGetMaterials();
  const getHeaders = getHeadersMaterials();

  console.log ('materials',materials)
  return (

    <PrivateRoute >
      <div>
        <h1 className="text-3xl font-bold">Materials Page</h1>
        {isLoading ? (
          <Load />
        ) : (
            <Table columns={getHeaders} data={materials} />
        )
        }
      </div>
    </PrivateRoute >

  );
};

export default materials;
