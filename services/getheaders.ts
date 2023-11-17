export const getHeadersUsers = () => (
    [
        {
            dataAttribute: 'id',
            header: 'Identificador'
        },
        {
            dataAttribute: 'email',
            header: 'Correo '
        },
        {
            dataAttribute: 'roleId',
            header: 'Rol'
        }
    ]
); 

export const getHeadersMaterials = () => (
    [
        {
            dataAttribute: 'id',
            header: 'Identificador'
        },
        {
            dataAttribute: 'createdAt',
            header: 'Fecha de Creación'
        },
        {
            dataAttribute: 'name',
            header: 'Nombre '
        },
        {
            dataAttribute: 'quantity',
            header: 'Saldo'
        },
        {
            dataAttribute: 'userId',
            header: 'Creado por '
        }

    ]
);

export const getHeadersInventory = () => (
    [
        {
            dataAttribute: 'id',
            header: 'Identificador'
        },
        {
            dataAttribute: 'quantity',
            header: 'Entrada '
        },
        {
            dataAttribute: 'movementType',
            header: 'Entrada '
        },
        {
            dataAttribute: 'userId',
            header: 'Responsable'
        }


    ]
)