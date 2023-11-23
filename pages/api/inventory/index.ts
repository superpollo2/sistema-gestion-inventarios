import { InventoryMovement } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/services/prisma'
import { checkPrivateApi } from '@/utils/checkServerSession';
import { useSession } from 'next-auth/react';
import { Enum_MovementType } from "@prisma/client";

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
            
        }

        if (req.method === 'POST') {

            const { materialId, quantity, movementType, userId } = req.body;
            


            if (!materialId || !quantity || !movementType) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const inventory = await prisma.inventoryMovement.create({
                data: {
                    movementType: movementType,
                    quantity: parseInt(quantity),
                    createdBy: {
                        connect: {
                            id: userId,
                        },
                    },
                    material:{
                        connect: {
                            id: materialId
                        }
                    }
                },
            })
            console.log("cosa")
            return res.status(201).json({})
            //TODO: Restar y validar la cantidad en el objeto Material
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }


};
export default inventoriesApi;