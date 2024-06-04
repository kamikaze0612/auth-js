"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas/auth";
import { AuthError } from "next-auth";
import { safeParse } from "valibot";

export const login = async (credentials: LoginSchema) => {
  const validatedFields = safeParse(LoginSchema, credentials);

  if (!validatedFields.success) {
    return {
      error: "Invalid input",
    };
  }

  const { email, password } = validatedFields.output;

  try {
    await signIn("credentials", {
      email,
      password,
    });

    return {
      success: "Logged In" as const,
    };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default:
          return {
            error: "Something went wrong",
          };
      }
    }

    throw err;
  }
};
