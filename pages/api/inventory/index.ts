import { InventoryMovement } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/services/prisma'
import { checkPrivateApi } from '@/utils/checkServerSession';

interface ResponseData {
    inventories?: InventoryMovement[];
    message?: string;
}

const inventoriesApi = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    try {
        await checkPrivateApi(req, res);

        if (req.method === 'GET') {
            const { materialId } = req.query;
            const inventories = await prisma.inventoryMovement.findMany({
                where: {
                    materialId: materialId as string,
                },
            });

            return res.status(200).json({ inventories });
            
        } if (req.method === 'POST'){

            
        }
        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }


};
export default inventoriesApi;