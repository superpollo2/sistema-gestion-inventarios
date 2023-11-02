import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from 'next-auth/providers/auth0';
import prisma from "@/services/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
   
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID || '',
            clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
            issuer: process.env.AUTH0_ISSUER || ''
        }),
    ],
};

export default NextAuth(authOptions);