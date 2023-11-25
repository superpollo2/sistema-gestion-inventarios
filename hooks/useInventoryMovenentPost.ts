import { API_ROUTES } from '@/services/apiConfig';
import axios from 'axios';


const useInvetoryMovement = async (movementType: string, materialId: string, quantity: number, userId: string | undefined) => {
    try {
        const postData = {
            materialId: materialId,
            quantity: quantity,
            movementType: movementType,
            userId: userId
        }
        // Realizar la solicitud para añadir el movimiento
        await axios.request({
            method: 'POST',
            url: `${API_ROUTES.inventory}`,
            data: postData ,
        });

        // Si la actualización es exitosa, no hay error
        return {
            success: true
        };
    } catch (error) {
        // Si hay un error, devolver el mensaje de error
        return { 
            success: false, 
            errorMessage: 'Error Añadiendo el movimiento' };
    }
};


export { useInvetoryMovement }