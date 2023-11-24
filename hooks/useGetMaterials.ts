
import useSWR from 'swr';
import { MaterialQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';
import { Material } from '@prisma/client';

const useGetMaterials = () => {
    const {data, isLoading, error} = useSWR<MaterialQuery>(
        API_ROUTES.materials,
        fetcher
    );
    

    return {
      materials: data?.materials ?? [] as Material[],
      isLoading,
      error
    }
    
};

export  { useGetMaterials };