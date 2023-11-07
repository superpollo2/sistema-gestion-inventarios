import React from "react";
import { PrivateRoute  } from "@/components/PrivateRoute";
import { ProtectedComponent } from "@/components/ProtectedComponent";

const users = () => {
  return (
    <PrivateRoute >
      <ProtectedComponent roleName="ADMIN">
      <h1 className="text-3xl font-bold">Users Page</h1>
      </ProtectedComponent>
    </PrivateRoute >

  );
};

export default users;
