import prisma from '@/services/prisma';
import { checkPrivateApi } from '@/utils/checkServerSession';
import { Material } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

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
            const { data } = req.body;

            // Crea un nuevo material y su movimiento en inventario
            const newMaterial = await prisma.material.create({
                data: {
                    name: data.name,
                    quantity: data.quantity,
                    userId: data.userId,
                    movements: {
                        create: {
                            movementType: data.movementType,
                            quantity: data.quantity,
                            userId: data.userId,
                        },
                    },
                },
                include: {
                    movements: true,
                },
            });

            return res.status(201).json({ newMaterial });
        }
        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default materialsApi;


