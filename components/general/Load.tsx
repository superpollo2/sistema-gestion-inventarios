const Load = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center">
        <svg
          className="animate-spin h-6 w-6 mr-3 text-zinc-800 text-xl"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25 "
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75 "
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        <span className="font-bold">Cargando...</span>
      </div>
    </div>
  );
};

export { Load };
