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
            const { name, quantity, userId } = req.body;

            // Validar que los campos requeridos estén presentes en el cuerpo de la solicitud
            if (!name || !quantity || !userId) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const newMaterial = await prisma.material.create({
                data: {
                    name: name,
                    quantity: parseInt(quantity),
                    createdBy: {
                        connect: {
                            id: userId,
                        },
                    },
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


