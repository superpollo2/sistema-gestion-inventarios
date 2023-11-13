import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import Table from "@/components/Table/index";

const Home = () => { 
  return (

    <PrivateRoute>
      <h1>Bienvenido</h1>
    </PrivateRoute>
  );
};

export default Home;