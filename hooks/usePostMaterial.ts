import { Material } from '@prisma/client';
import axios from "axios";

type Data = {
    name: string;
    quantity: number;
    userId?: string

}


const usePostMaterial = async (material: Data) => {
    try {
        await axios.post('api/materials', material);
        
        return {
            success: true
        };
    } catch (error) {
        return { 
            success: false, 
            errorMessage: 'Error creando un nuevo material' };
    }
};

export { usePostMaterial }