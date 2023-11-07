// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import prisma from '@/services/prisma'
import { checkProtectedApi } from '@/utils/checkServerSession';

type Data = {
  users?: User[];
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await checkProtectedApi(req, res, 'ADMIN');

    if (req.method === 'GET') {
      const users = await prisma.user.findMany({
        orderBy: {
          email: 'asc',
        },
      });
      return res.status(200).json({ users });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
}