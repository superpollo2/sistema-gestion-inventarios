import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";

const Home = () => {
  return (

    <PrivateRoute>
      <h1>autenticated</h1>
    </PrivateRoute>

  );
};

export default Home;
