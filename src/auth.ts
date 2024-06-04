import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { safeParse } from "valibot";

import { db } from "./database";
import { LoginSchema } from "./schemas/auth";
import { getUserByEmail } from "./services/users/get_user_by_email";

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = safeParse(LoginSchema, credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.output;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const isPasswordCorrect = await compare(password, user.password);

          if (isPasswordCorrect) return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
