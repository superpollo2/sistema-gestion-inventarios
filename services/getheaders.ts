import { UserKeys } from "@/types";

export const getHeadersUsers = () => (
    [
        {
            userAttribute: 'id',
            header: 'Identificador'
        },
        {
            userAttribute: 'email',
            header: 'Correo '
        },
        {
            userAttribute: 'roleId',
            header: 'Rol'
        }
    ]
); 

export const getHeadersMaterials = () => (
    [
        {
            materialAttribute: 'id',
            header: 'Identificador'
        },
        {
            materialAttribute: 'createdAt',
            header: 'Fecha de Creación'
        },
        {
            materialAttribute: 'name',
            header: 'Nombre '
        },
        {
            materialAttribute: 'quantity',
            header: 'Saldo'
        },
        {
            materialAttribute: 'userId',
            header: 'Creado por '
        }

    ]
);

export const getHeadersInventory = ()  => (
    [
        {
            inventaryAttribute: 'id',
            header: 'Identificador'
        },
        {
            inventaryAttribute: 'entrada',
            header: 'Entrada '
        },
        {
            inventaryAttribute: 'salida',
            header: 'Salida '
        },
        {
            inventaryAttribute: 'userId',
            header: 'Responsable'
        }


    ]
)