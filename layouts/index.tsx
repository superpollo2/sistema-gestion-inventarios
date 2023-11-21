import React from 'react';
import { useSession } from 'next-auth/react';
import { SideNavigationUserProfile } from '@/components/ui/Side'
import { Load } from '@/components/general/Load';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <Load/>
  }

  if (status === 'authenticated') {
    return (
      
      <main className='flex'>
        <SideNavigationUserProfile />
        
        {children}
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




