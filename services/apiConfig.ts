const SERVER_URL = '/api';

const API_ROUTES = {
    users: `${SERVER_URL}/users`,
    roles: `${SERVER_URL}/roles`,
    materials: `${SERVER_URL}/materials`,
    material: `${SERVER_URL}/inventory?materialId=`,
    inventory: `${SERVER_URL}/inventory`  
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export {SERVER_URL, API_ROUTES, fetcher}