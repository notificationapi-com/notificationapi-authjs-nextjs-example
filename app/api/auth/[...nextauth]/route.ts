import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import notificationapi from "notificationapi-node-server-sdk";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      async sendVerificationRequest({ identifier: email, url }) {
        notificationapi.init(
          process.env.NOTIFICATIONAPI_CLIENT_ID as string,
          process.env.NOTIFICATIONAPI_CLIENT_SECRET as string
        );
        await notificationapi.send({
          notificationId: "magic_link", // Create this template in NotificationAPI dashboard
          user: {
            id: email,
            email: email,
          },
          mergeTags: {
            magic_link: url,
          },
        });
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
