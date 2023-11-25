
import useSWR from 'swr';
import { InventoryMovementQuery } from '@/types';
import { API_ROUTES, fetcher } from '@/services/apiConfig';
import { InventoryMovement } from '@prisma/client';

const useGetInventories = (material: string) => {
    const {data, isLoading, error} = useSWR<InventoryMovementQuery>(
      `${API_ROUTES.material}${material}`,
        fetcher
    );
    
    return {
      inventories: data?.inventories ?? [] as InventoryMovement[],
      isLoading,
      error
    }
    
};

export {useGetInventories}