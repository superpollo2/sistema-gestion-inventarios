import React from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";

const materials = () => {
  return (

    <PrivateRoute >
      <h1 className="text-3xl font-bold">Materials Page</h1>
    </PrivateRoute >

  );
};

export default materials;
