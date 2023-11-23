import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app';
import { Provider } from 'jotai'
import { Layout } from "@/layouts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Layout>
          <Component {...pageProps} />

          <ToastContainer />
        </Layout>
      </Provider>
    </SessionProvider>
  );

};

export default App;
