import { db } from "@/database";

export const getUserByEmail = async (email: string) => {
  const user = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });

  return user;
};
