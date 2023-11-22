import { useGetRoles } from "@/hooks/useGetRoles";
import { User } from "@prisma/client"

interface RoleColorProps {
    user: User;
}
const RoleColor = ({ user }: RoleColorProps) => {

    const { roles } = useGetRoles();
    const roleText = roles?.find((r) => r.id === user.roleId)?.name ?? "";
    return (
        <>
            {roleText === 'ADMIN' ? (
                <span className="bg-yellow-300 opacity-75 text-slate-800 rounded-full px-2 py-1 text-xs font-bold capitalize ">{roleText.toLowerCase()}</span>
            ):roleText === 'USER' && (
                <span className="bg-cyan-300 opacity-75 text-slate-800 rounded-full px-2 py-1 text-xs font-bold capitalize w-auto">{roleText.toLowerCase()}</span>
            )}
        </>
    );
};

export { RoleColor}