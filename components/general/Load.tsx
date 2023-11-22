import { Spinner } from "./Spinner";

const Load = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center">
      <Spinner color={'zinc-800'}/>
        <span className="font-bold">Cargando...</span>
      </div>
    </div>
  );
};

export { Load };
