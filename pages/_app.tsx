import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app';
import { Provider } from 'jotai'
import { Layout } from "@/Layouts";


const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );

};

export default App;
