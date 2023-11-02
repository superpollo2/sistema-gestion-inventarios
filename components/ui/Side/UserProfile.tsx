
import { useSession, signIn } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
    const { data, status } = useSession();
    return (
        <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
            {status === 'authenticated' && (
                <><Image src={data?.user.image ?? ''} alt='imagen usuario' title='user name' width={40} height={40} /><h1>{data?.user.name} {data?.user.role?.name} </h1></>
            )}
        </div>
    );

};
export {UserProfile}

