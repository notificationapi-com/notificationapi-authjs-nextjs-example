import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: "smpt_server",
      from: "from_address",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
