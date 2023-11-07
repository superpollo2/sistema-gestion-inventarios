import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { Enum_RoleName } from '@prisma/client';

const checkPrivateApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return session.user.role?.name;
};

const checkProtectedApi = async (
  req: NextApiRequest,
  res: NextApiResponse,
  roleName: Enum_RoleName
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (session.user.role?.name !== roleName) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  return session.user.role.name;
};

export { checkPrivateApi, checkProtectedApi };