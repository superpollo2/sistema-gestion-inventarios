
import useSWR from 'swr';
import {UsersQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';


const useGetInventories = (userId: string) => {
    const {data, isLoading, error} = useSWR<UsersQuery>(
      `${API_ROUTES.users}/${userId ?? ''}`,
        fetcher
    );
    

    return {
      user: data?.users ,
      isLoading,
      error
    }
    
};

export {useGetInventories}