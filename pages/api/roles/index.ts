import { NextApiRequest, NextApiResponse } from "next";
import {Role} from '@prisma/client'
import prisma from '@/services/prisma'

interface ResponseData{
    roles: Role[];
}
const rolesApi = async (
    req: NextApiRequest, 
    res: NextApiResponse<ResponseData>
) =>{
    const roles = await prisma.role.findMany();
    res.status(200).json({roles});
    console.log("hpt")
};

export default rolesApi;