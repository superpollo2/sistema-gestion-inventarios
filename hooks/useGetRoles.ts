import { API_ROUTES, fetcher } from '@/services/apiConfig';
import { RolesQuery } from '@/types';
import { Role } from '@prisma/client';
import useSWR from 'swr';

const useGetRoles = () => {
  const { data, isLoading, error } = useSWR<RolesQuery>(
    API_ROUTES.roles,
    fetcher
  );

  return {
    roles: data?.roles ?? [] as Role[],
    isLoading,
    error,
  };
};

export { useGetRoles };