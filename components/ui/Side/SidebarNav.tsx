import { LinkItem } from "./LinkItem";
import { HiOutlineChat, HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";
import { useSession } from "next-auth/react";

const SidebarNavigation = () => {
    const { data } = useSession();
    return (
        <nav
            aria-label="side navigation"
            className="flex-1  divide-y divide-slate-100 overflow-auto"
        >
            <div>
                <ul className=" flex flex-col py-5">
                    {data?.user.role?.name === "ADMIN" && (
                        <>
                            <LinkItem link="/usuarios" text="Usuarios" >
                                <HiOutlineUsers />
                            </LinkItem>
                        </>
                    )}

                    <LinkItem link="/inventarios" text="Inventarios">
                        <HiOutlineViewGrid />
                    </LinkItem>
                    <LinkItem link="/materiales" text="Materiales">
                        <HiOutlineChat />
                    </LinkItem>

                </ul>
            </div>
        </nav >
    );
};

export { SidebarNavigation }