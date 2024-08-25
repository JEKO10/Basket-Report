import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import { getUserByid } from "@/actions/user";
import db from "@/prisma/db";

import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub;

      if (token.username && session.user) {
        session.user.username = token.username as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserByid(token.sub);

      if (existingUser && existingUser.username) {
        token.username = existingUser.username;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", maxAge: 7200 },
  ...authConfig,
});
