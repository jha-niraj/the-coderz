// types/next-auth.d.ts
import "next-auth";
import { Role } from "@prisma/client"; // or wherever your Role enum is defined

declare module "next-auth" {
    interface User {
        role: Role;
    }

    interface Session {
        user: {
            id: string;
            email: string;
            role: Role;
        }
    }
}