import { API_ROUTES } from '@/services/apiConfig';
import axios from 'axios';


const usePutUserRole = async (userId: string, roleId: string) => {
    try {
        // Realizar la solicitud para actualizar el usuario
        await axios.request({
            method: 'PUT',
            url: `${API_ROUTES.users}/${userId}`,
            data: { roleId },
        });

        // Si la actualización es exitosa, no hay error
        return {
            success: true
        };
    } catch (error) {
        // Si hay un error, devolver el mensaje de error
        return { 
            success: false, 
            errorMessage: 'Error actualizando el usuario' };
    }
};


export { usePutUserRole }