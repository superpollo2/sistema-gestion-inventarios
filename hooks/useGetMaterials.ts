
import useSWR from 'swr';
import { MaterialQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';

const useGetMaterials = () => {
    const {data, isLoading, error} = useSWR<MaterialQuery>(
        API_ROUTES.materials,
        fetcher
    );
    
    console.log(data?.materials)

    return {
      materials: data?.materials ?? [] as MaterialQuery[],
      isLoading,
      error
    }
    
};

export  { useGetMaterials };