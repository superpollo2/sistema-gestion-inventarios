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
    if (req.method === 'GET') {
        const materials = await prisma.material.findMany();
        return res.status(200).json({ materials });
    }

    if (req.method === 'POST') {
        const { name, quantity, userId } = req.body;

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
};

export default materialsApi;


