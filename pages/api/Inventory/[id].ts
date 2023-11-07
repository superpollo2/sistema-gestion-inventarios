import { InventoryMovement } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/services/prisma'
import { checkPrivateApi } from '@/utils/checkServerSession';

interface ResponseData {
    inventories?: InventoryMovement;
    message?: string;
}

const inventoryApi = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    try {
        await checkPrivateApi(req, res);

        const inventoryMovementId = req.query.id as string;

        if (req.method === 'PUT') {
            const { movementType, quantity } = req.body;

            const updatedInventory = await prisma.inventoryMovement.update({
                where: {
                    id: inventoryMovementId,
                },
                data: {
                    movementType: movementType,
                    quantity: quantity,
                },
            });

            return res.status(200).json({ inventories: updatedInventory });
        }
        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }



};