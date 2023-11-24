import prisma from '@/services/prisma';
import { checkPrivateApi } from '@/utils/checkServerSession';
import { NextApiRequest, NextApiResponse } from 'next';
import { Enum_MovementType, Material } from 'prisma/prisma-client';
import { PrismaClient } from '@prisma/client'

interface ResponseData {
    materials?: Material[];
    message?: string;
    newMaterial?: Material;
}

const materialsApi = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    await checkPrivateApi(req, res);
    try {
        if (req.method === 'GET') {
            const materials = await prisma.material.findMany();
            return res.status(200).json({ materials });
        }

        if (req.method === 'POST') {
            
            const dataPost  = req.body;

            if (!dataPost.name || !dataPost.quantity || !dataPost.userId) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const newMaterial = await prisma.material.create({
                data: {
                    name: dataPost.name,
                    quantity: dataPost.quantity,
                    createdBy: {
                        connect: {
                            id: dataPost.userId
                        },
                    }
                },
            });
            await prisma.inventoryMovement.create({
                data: {
                    material: {
                        connect: {
                            id: newMaterial?.id
                        },
                    },
                    quantity: newMaterial?.quantity,
                    movementType: Enum_MovementType.ENTRADA,
                    createdBy: {
                        connect: {
                            id: dataPost.userId
                        },
                    }
                }
            });
            return res.status(201).json({ newMaterial });
            }
            // Crea un nuevo material y su movimiento en inventario
        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error ' });
    }
};

export default materialsApi;


