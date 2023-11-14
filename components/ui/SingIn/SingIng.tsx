import { signIn } from "next-auth/react";

const SingIn = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r to-blue-800 from-white flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-white rounded-lg p-8 shadow-md w-96 ">
        <h1 className="text-3xl font-bold text-center mb-4">
          Bienvenido al Sistema de Gestión de Inventarios
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Ingeniería Web MJ 2023-2
        </p>
        <button
          className=""
          onClick={() => {
            signIn("auth0");
          }}
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
};

export { SingIn };
