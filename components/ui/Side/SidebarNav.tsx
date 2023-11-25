import { LinkItem } from "./LinkItem";
import { PiUsersFill } from "react-icons/pi";
import { MdInventory2 } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

const SidebarNavigation = () => {
    const { data } = useSession();
    return (
        <nav
            aria-label="side navigation"
            className="flex-1 justify-center divide-y divide-slate-100 overflow-auto pt-5 bg-[#03071E]"
        >

            <ul className=" flex flex-col py-5 gap-6 items-center">
                {data?.user.role?.name === "ADMIN" && (

                    <LinkItem link="/usuarios" text="Usuarios" >
                        <PiUsersFill />
                    </LinkItem>

                )}
                
                <LinkItem link="/inventarios" text="Inventarios">
                    <MdInventory2 />
                </LinkItem>


                <LinkItem link="/materiales" text="Materiales">
                    <BsFillBoxFill />
                </LinkItem>

            </ul>

        </nav >
    );
};

export { SidebarNavigation }