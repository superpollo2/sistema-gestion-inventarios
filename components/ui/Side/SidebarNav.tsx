import { LinkItem } from "./LinkItem";
import { HiOutlineChat,HiOutlineUsers,HiOutlineViewGrid } from "react-icons/hi";

const SidebarNavigation = () => {
    return (
        <nav
            aria-label="side navigation"
            className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
            <div>
                <ul className="flex flex-1 flex-col gap-1 py-3">
                    <LinkItem link="/inventarios" text="Inventarios">
                        <HiOutlineViewGrid/>
                    </LinkItem>
                    <LinkItem link="/materiales" text="Materiales">
                        <HiOutlineChat />
                    </LinkItem>
                    <LinkItem link="/usuarios" text="Usuarios" >
                        <HiOutlineUsers/>
                   </LinkItem>
            </ul>
        </div>
        </nav >
        );
};

export { SidebarNavigation }