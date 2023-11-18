import useSWR from 'swr';
import { UsersQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';
import { User } from '@prisma/client';

const useGetUsers = () => {
    const { data, isLoading, error } = useSWR<UsersQuery>(
        API_ROUTES.users,
        fetcher
    );

    return {
        users: data?.users ?? [] as User[],
        isLoading,
        error
    };
};

export { useGetUsers };
