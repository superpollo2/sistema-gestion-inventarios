import prisma from '@/services/prisma';
import { checkProtectedApi } from '@/utils/checkServerSession';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
    user?: User;
    message?: string;
}

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    await checkProtectedApi(req, res, 'ADMIN');

    try {
        if (req.method === 'PUT') {
            const userId = req.query.id as string;
            const  roleId  = req.body.roleId as string;
            
            const updatedUser = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    roleId
                },
            });
            return res.status(200).json({ user: updatedUser });
        }
        return res.status(405).json({ message: 'Method not allowed' });
    }catch{
        return res.status(500).json({ message: 'Internal server error' });
    }

};

export default handler;