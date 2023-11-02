
import {useSession, signIn} from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  const {data, status} = useSession();
  console.log(data)
  return (
    <main>
      {status === 'authenticated' ?(
        <><Image src={data?.user.image ?? ''} alt='imagen usuario' title='user name' width={40} height={40} /><h1>{data?.user.name} {data?.user.role?.name} </h1></>
      ): (
        <div>
          <div className="w-full h-screen bg-gradient-to-r to-blue-800 from-white flex items-center justify-center">
          <h1>Sistema de gestión de inventarios</h1>
            <div className="bg-white rounded-lg p-8 shadow-md w-96">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Bienvenido al Sistema de Gestión de Inventarios
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Ingeniería Web MJ 2023-2
                </p>
            </div>
        </div>
          <button onClick={() =>{
            signIn('auth0');}}>
            Iniciar Sesion
          </button>
        </div>
      )}
      

    </main>
  );

};

export default Home;
