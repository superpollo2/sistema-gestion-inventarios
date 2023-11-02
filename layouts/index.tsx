import React from 'react';
import { useSession } from 'next-auth/react';
import { SideNavigationUserProfile } from '@/components/ui/Side'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (status === 'authenticated') {
    return (

      <main className='flex flex-row'>
        <SideNavigationUserProfile />
        {children}
      </main>

    )
  }
  return <PublicLayout>{children}</PublicLayout>
};

const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <main className='bg-gradient-to-r to-blue-800 from-white w-full"'>
      
      {children}
    </main>
  )
}

export { Layout }




