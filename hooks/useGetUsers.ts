import useSWR from 'swr';
import { UsersQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';

const useGetUsers = () => {
    const { data, isLoading, error } = useSWR<UsersQuery>(
        API_ROUTES.users,
        fetcher
    );

    return {
        users: data?.users ?? [] as UsersQuery[],
        isLoading,
        error
    };
};

export { useGetUsers };
