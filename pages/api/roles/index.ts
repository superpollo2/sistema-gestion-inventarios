import prisma from '@/services/prisma';
import { checkPrivateApi } from '@/utils/checkServerSession';
import { Role } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
    roles?: Role[];
    message?: string;
}

const rolesApi = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    await checkPrivateApi(req, res);
    try {
        if (req.method === 'GET') {
            const roles = await prisma.role.findMany();
            return res.status(200).json({ roles });
        }
        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }

};

export default rolesApi;