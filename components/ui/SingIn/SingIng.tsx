import { signIn } from "next-auth/react";

const SingIn = () => {
  return (
    <div className="h-screen w-full flex flex-row ">

      <aside className=" w-8/12 bg-white flex flex-col  items-center justify-center">
        <div className="pl-14 flex flex-col items-center justify-center">
          <h1 className=" font-bold text-center text-6xl text-[#03071E] mb-4">
            Bienvenido al Sistema de Gestión de Inventarios
          </h1>
          <p className="text-[#E85D04]  text-2xl"> Ingeniería Web MJ 2023-2 </p>
          <button
              className="px-5 py-3 rounded-md shadow-lg hover:scale-110 mt-5 hover:shadow-none bg-[#E85D04] text-white font-bold text-2xl hover:text-white hover:bg-[#03071E]"
              onClick={() => {
                signIn("auth0");
              }}
            >
              Iniciar sesión
            </button>

        </div>
      </aside>

      <aside className="bg-[#E85D04] h-screen w-4/12"></aside>


    </div>
  );
};

export { SingIn };
