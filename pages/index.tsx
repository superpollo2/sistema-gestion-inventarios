import React from "react";
import { PrivateRoute } from "@/components/PrivateRoute";
import Image from "next/image";


const Home = () => { 
  return (

    <PrivateRoute>
      <div className="w-full h-screen flex items-center justify-end">
        <h1 className=" pr-5 font-bold text-6xl text-[#03071E]">Bienvenido</h1>
        <div>
          <div className=" h-screen  flex items-end justify-end">
            <Image  src='/images/box.png' height={806} width={1024} alt="presentacion" />
            </div>
        </div>
      </div>


    </PrivateRoute>
  );
};

export default Home;