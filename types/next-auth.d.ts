import NextAuth from "next-auth";
import {Role} from "@prisma/client";


interface User {
    email: string;
    image: string; // Asegúrate de que 'image' esté correctamente tipada como string
    name: string;
    role: Role ?;
    createdAt: Date;
    id: string;
    updatedAt: Date;
  }
  
  declare module 'next-auth' {
    interface Session {
      user: User;
    }
  }
 
  
  
  
  
