import { SideNavigationUserProfile } from '@/components/ui/Side'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main className='flex flex-row'>
            <SideNavigationUserProfile />
              {children}
        </main>
    )
}

export { Layout }