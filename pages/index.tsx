
import {useSession, signIn} from 'next-auth/react';

const Home = () => {
  const {data, status} = useSession();
  return (
    <main>
      {status === 'authenticated' ?(
        
        <h1>Sistema de gestión de inventarios</h1>
      ): (
        <div>
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
