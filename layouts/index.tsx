
import React from 'react';
import { useSession } from 'next-auth/react';



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (status === 'authenticated') {
    return (
      <main>
        <h1>Layout</h1>
      </main>

    )
  }
  return <PublicLayout>{children}</PublicLayout>
};

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export { Layout }