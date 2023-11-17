
import useSWR from 'swr';
import { InventoryMovementQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';

const useGetInventories = (material: string) => {
    const {data, isLoading, error} = useSWR<InventoryMovementQuery>(
        API_ROUTES.material+material,
        fetcher
    );
    

    return {
      inventories: data?.inventories ?? [] as InventoryMovementQuery[],
      isLoading,
      error
    }
    
};

export {useGetInventories}