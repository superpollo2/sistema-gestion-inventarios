import React from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";

const inventory = () => {
  return (

    <PrivateRoute >
      <h1 className="text-3xl font-bold">Inventory Page</h1>
    </PrivateRoute >

  );
};

export default inventory;
